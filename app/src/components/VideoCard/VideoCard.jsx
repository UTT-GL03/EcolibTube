import styles from './VideoCard.module.css';

import { useNavigate } from "react-router-dom";

import { getRandomVideoScreenshot } from '@/services/mediaService';


/**
 * Component to create a Video card, composed by a video screenshot and some data like title, create, views
 * 
 * @param {string} idVideo The identifier of the video in the database 
 * 
 * @returns {JSX.Element}
 */
function VideoCard({video}) {
    // FIELDS
    const navigate = useNavigate();

    // FUNCTIONS
    function formatViews(views) {
        if (views >= 1000000) {
            return (views / 1000000).toFixed(2) + 'M';
        } else if (views >= 1000) {
            return (views / 1000).toFixed(2) + 'K';
        }

        return views;
    }

    const goToVideo = () => {
        navigate('/video');
    }


    // RENDER
        return <figure className={styles.videoCard} onClick={goToVideo}>
            <img className={styles.videoScreenshot} src={getRandomVideoScreenshot()} alt="video screenshot"/>

            <figcaption className={styles.videoCaption}>
                <img className={styles.creatorPhotoProfil} src='/assets/creator-pp-example.png' alt="video creator photo profil"/>

                <div className={styles.videoInfoDesc}>
                    <h4 className={styles.videoTitle}>{video.title}</h4>
                    <span className={styles.creatorName}>{video.creator}</span>
                    <span className={styles.videoViews}>&#x1F441; {formatViews(video.views)}</span>
                </div>
            </figcaption>
        </figure>
}

export default VideoCard;
