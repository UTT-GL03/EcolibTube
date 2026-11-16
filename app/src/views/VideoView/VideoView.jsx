import styles from './VideoView.module.css';

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getRandomVideoURL } from '@/services/mediaService';
import VideoDescritpion from '@/components/VideoDescription';


function VideoView() {
    // FIELDS
    const { id } = useParams();

    const [videoData, setVideoData] = useState({});
    const [comments, setComments] = useState([]);

    useEffect(() => {
        fetch('/dummy-data/videos.json')
            .then(data => data.json())
            .then(data => setVideoData(data.video.filter((currentVideo => currentVideo.id === id))[0]));
    }, []);

    // RENDER
    return <main className={styles.viewContainer}>
        <video className={styles.videoPlayer} controls><source src={getRandomVideoURL()} type='video/mp4'></source></video>

        <VideoDescritpion video={videoData} />

        <h2 className={styles.commentsTitle}>Video Comments</h2>
        {/*
        <ul className={styles.commentsList}>
            {commentsData.comment.filter((comment) => (comment.parent == null))
                                .slice(0, commentsCount)
                                .map((comment) => {
                <CommentCard key={comment.id} idVideo={comment.id}/>
            })}
        </ul>
        <button className={styles.moreCommentsBtn}></button>
        */}
    </main>
}

export default VideoView
