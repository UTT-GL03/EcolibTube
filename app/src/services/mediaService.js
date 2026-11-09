export function getRandomVideoScreenshot() {
    const screenshot_id = Math.floor(Math.random() * 9) + 1;

    return `/assets/video_screenshots/video-screenshot-example_${screenshot_id}.jpg`;
}

export function getRandomCreatorPP() {
    const creator_id = Math.floor(Math.random() * 10) + 1;

    return `/assets/creators_pp/creator-pp-example_${creator_id}.png`;
}

export function getRandomVideoURL() {
    const video_id = Math.floor(Math.random() * 10) + 1;

    return `/assets/videos/videos-example_1.mp4`;
}
