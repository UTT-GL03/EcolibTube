import styles from './TrendingView.module.css';

import videosData from '@/services/dummy-data/videos.json';

import VideoCard from '@/components/VideoCard';


function TrendingView() {
    return <main className={styles.viewContainer}>
        {videosData.video.map((video) => (
            <VideoCard key={video.id} idVideo={video.id}/>
        ))}
    </main>
}

export default TrendingView
