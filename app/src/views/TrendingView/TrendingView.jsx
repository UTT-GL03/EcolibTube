import styles from './TrendingView.module.css';

import { useEffect, useState } from 'react';

import VideoCard from '@/components/VideoCard';


function TrendingView() {
    const [videosData, setVideosData] = useState([]);

    useEffect(() => {
        fetch('/dummy-data/videos.json')
            .then(data => data.json())
            .then(data => setVideosData(data.video));
    }, []);

    // RENDER
    return <main className={styles.viewContainer}>
        {videosData.map((video) => (
            <VideoCard key={video.id} video={video}/>
        ))}
    </main>
}

export default TrendingView
