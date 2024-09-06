document.addEventListener('DOMContentLoaded', () => {
    const movieList = document.querySelector('.movie-list');
    const videoElement = document.getElementById('video');

    const movies = {
        'movie1': 'videos/movie1.mp4',
        'movie2': 'videos/movie2.mp4',
        'movie3': 'videos/movie3.mp4',
        // Thêm nhiều phim ở đây
    };

    movieList.addEventListener('click', (e) => {
        if (e.target.tagName === 'A') {
            e.preventDefault();
            const movieId = e.target.getAttribute('data-movie');
            const movieSrc = movies[movieId];
            if (movieSrc) {
                videoElement.src = movieSrc;
                videoElement.play();
            }
        }
    });
});
