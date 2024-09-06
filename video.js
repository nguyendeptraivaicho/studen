document.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    const movieId = params.get('movie');

    const videoContainer = document.getElementById('video-container');

    if (movieId) {
        const videoUrl = `videos/movie${movieId}.mp4`;
        videoContainer.innerHTML = `
            <video controls>
                <source src="${videoUrl}" type="video/mp4">
                Trình duyệt của bạn không hỗ trợ thẻ video.
            </video>
        `;
    } else {
        videoContainer.innerHTML = '<p>Không tìm thấy video.</p>';
    }
});
