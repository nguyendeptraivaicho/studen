document.addEventListener('DOMContentLoaded', () => {
    const videoElement = document.getElementById('video');
    const movieTitle = document.getElementById('movie-title');
    const backButton = document.getElementById('back-button');

    // Lấy tham số phim từ URL
    const urlParams = new URLSearchParams(window.location.search);
    const movieId = urlParams.get('movie');

    // Danh sách phim với URL video tương ứng
    const movies = {
        'movie1': 'videos/movie1.mp4',
        'movie2': 'videos/movie2.mp4',
        'movie3': 'videos/movie3.mp4',
        // Thêm nhiều phim ở đây
    };

    const movieSrc = movies[movieId];
    const movieName = movieId.charAt(0).toUpperCase() + movieId.slice(1); // Chuyển 'movie1' thành 'Movie1'

    if (movieSrc) {
        videoElement.src = movieSrc;
        videoElement.play();
        movieTitle.textContent = `Đang xem: ${movieName}`;
    } else {
        movieTitle.textContent = `Phim không có sẵn.`;
    }

    // Xử lý sự kiện khi nhấp vào nút quay lại
    backButton.addEventListener('click', () => {
        window.location.href = 'index.html';
    });
});
