import styles from './VideoDescription.module.css';

import { getRandomCreatorPP } from '@/services/mediaService';


function VideoDescription({video}) {
    function formatViews(views) {
        if (views >= 1000000) {
            return (views / 1000000).toFixed(2) + 'M';
        } else if (views >= 1000) {
            return (views / 1000).toFixed(2) + 'K';
        }

        return views;
    }


    // RENDER
    return <div className={styles.descContainer}>
        <h2 className={styles.videoTitle}>{video.title}</h2>

        <img className={styles.videoCreator} src={getRandomCreatorPP()} alt="Creator photo profil"></img>
        <div className={styles.likesBtnContainer}>
            <button className={styles.likeBtn}>
                <svg xmlns="http://w3.org" viewBox="0 0 24 24" width="32" height="32">
                    <path d="M2 20h2V10H2v10zm19.8-8.2l-2.6 6C18.9 18.5 18 19 17 19H8v-7l3.5-3.8.8-1 .4-2.8c0-.6.4-1 1-1h1c.6 0 1 .4 1 1v1.1l-1.3 4.2h5.8c.8 0 1.5.7 1.5 1.5 0 .2 0 .4-.2.6z"/>
                </svg>
            </button>
            <button className={styles.dislikeBtn}>
                <svg xmlns="http://w3.org" viewBox="0 0 24 24" width="32" height="32">
                    <path d="M22 4h-2v10h2V4zM2.2 12.2l2.6-6C5.1 5.5 6 5 7 5h9v7l-3.5 3.8-.8 1-.4 2.8c0 .6-.4 1-1 1h-1c-.6 0-1-.4-1-1v-1.1l1.3-4.2H4.7c-.8 0-1.5-.7-1.5-1.5 0-.2 0-.4.2-.6z"/>
                </svg>
            </button>
        </div>
        
        <div className={styles.descBottomContainer}>
            <span className={styles.videoViews}><b>Views : </b> {formatViews(video.views)} &#x1F441;</span>
            <span className={styles.videoDate}><b>Release Date : </b> {video.issued}</span>
            <p className={styles.descText}><b>Description : </b> {video.description}</p>
        </div>
    </div>
}

export default VideoDescription
