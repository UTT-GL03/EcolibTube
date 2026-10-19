import styles from './TrendingView.module.css';

import VideoCard from '@/components/VideoCard';
import videosData from '@/services/dummy-data/videos.json';


function TrendingView() {
    return <main className={styles.viewContainer}>
        {videosData.video.map((video) => (
            <VideoCard key={video.id} idVideo={video.id}/>
        ))}
    </main>
}

export default TrendingView
