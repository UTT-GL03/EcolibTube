import { useEffect, useState } from 'react';
import styles from './VideoView.module.css';

import { getRandomVideoURL } from '@/services/mediaService';


function VideoView({idVideo}) {
    // FIELDS
    const [comments, setComments] = useState([]);

    // RENDER
    return <main className={styles.viewContainer}>
        <video className={styles.videoPlayer} controls><source src={getRandomVideoURL()} type='video/mp4'></source></video>

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
