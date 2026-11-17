import styles from './VideoView.module.css';

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getRandomVideoURL } from '@/services/mediaService';
import VideoDescritpion from '@/components/VideoDescription';
import CommentCard from '@/components/CommentCard';


function VideoView() {
    // FIELDS
    const { id } = useParams();

    const [videoData, setVideoData] = useState({});
    const [commentsData, setCommentsData] = useState([]);

    useEffect(() => {
        fetch('/dummy-data/videos.json')
            .then(data => data.json())
            .then(data => setVideoData(data.video.filter((currentVideo => currentVideo.id === id))[0]));

        fetch('/dummy-data/comments.json')
            .then(data => data.json())
            .then(data => setCommentsData(data.comment));
    }, []);

    // RENDER
    return <main className={styles.viewContainer}>
        <video className={styles.videoPlayer} controls><source src={getRandomVideoURL()} type='video/mp4'></source></video>

        <VideoDescritpion video={videoData} />

        <h2 className={styles.commentsTitle}>Video Comments</h2>

        <ul className={styles.commentsList}>
            {commentsData.map(comment => (
                <CommentCard key={comment.id} comment={comment}/>
            ))}
        </ul>
    </main>
}

export default VideoView
