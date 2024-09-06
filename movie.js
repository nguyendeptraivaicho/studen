document.addEventListener('DOMContentLoaded', () => {
    const videoElement = document.getElementById('video');
    const movieTitle = document.getElementById('movie-title');

    // Lấy tham số phim từ URL
    const urlParams = new URLSearchParams(window.location.search);
    const movieId = urlParams.get('movie');

    // Danh sách phim với URL video tương ứng
    const movies = {
        'movie1': 'https://www.google.com/search?sca_esv=2fcb7b144273d9a6&sca_upv=1&sxsrf=ADLYWIJOgMlQYAG1YyG2pkaPZA_zdSBc4A:1725639691845&q=video&tbm=vid&source=lnms&fbs=AEQNm0D7NTKsOqMPi-yhU7bWDsijzGDOH6tj5L6fjCKjbCGom3wkeL_QP5E4yarP1ZlMcoJLi0Ydg-hbeQoypMvxP4gtK0pmMUjBogWcveFRaH6A2upMD3QLN5EQ6Fl-hB1yXFNIpWIeFn9fUYuLryANuo26qb1VTwtPpWzTfiaa8bcbuGZsAk9Bsvk9ZJEcnwnWWvbU8dTSoR8FodhPOifW6AhHGgRMWur4WTE7teQ69WuLW3SyVaU&sa=X&ved=2ahUKEwis197m3K6IAxVWk1YBHVcfAyMQ0pQJegQIFBAB&biw=1366&bih=633&dpr=1#',
        'movie2': 'https://www.youtube.com/watch?v=lIeoBGKyiOs',
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
});
