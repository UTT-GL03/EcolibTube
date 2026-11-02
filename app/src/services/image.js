export default function get__random_video_screenshot() {
    const video_id = Math.floor(Math.random() * 10) + 1;

    return `/assets/video_screenshots/video-screenshot-example_${video_id}.jpg`;
}
