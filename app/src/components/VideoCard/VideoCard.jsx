import styles from './VideoCard.module.css';

import videosData from '@/services/dummy-data/videos.json';


/**
 * Component to create a Video card, composed by a video screenshot and some data like title, create, views
 * 
 * @param {string} idVideo The identifier of the video in the database 
 * 
 * @returns {JSX.Element}
 */
function VideoCard({idVideo}) {
    // FIELDS
    const video = videosData.video.find((item => item.id === idVideo));

    // FUNCTIONS
    function formatViews(views) {
        if (views >= 1000000) {
            return (views / 1000000).toFixed(2) + 'M';
        } else if (views >= 1000) {
            return (views / 1000).toFixed(2) + 'K';
        }

        return views;
    }


    // RENDER
    return <figure className={styles.videoCard}>
        <img className={styles.videoScreenshot} src='/assets/video-screenshot-example.jpg' alt=""/>
        <figcaption className={styles.videoCaption}>
            <img className={styles.creatorPhotoProfil} src='/assets/creator-pp-example.png' alt=""/>
            <div className={styles.videoInfoDesc}>
                <h4 className={styles.videoTitle}>{video.title}</h4>
                <span className={styles.creatorName}>{video.creator}</span>
                <span className={styles.videoViews}>&#x1F441; {formatViews(video.views)}</span>
            </div>
        </figcaption>
    </figure>
}

export default VideoCard;
