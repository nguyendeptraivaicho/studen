document.addEventListener('DOMContentLoaded', () => {
    const movieList = document.getElementById('movie-list');
    const searchInput = document.getElementById('search-input');
    const videoElement = document.getElementById('video');
    const movieTitle = document.getElementById('movie-title');

    const movies = {
        'movie1': 'videos/movie1.mp4',
        'movie2': 'videos/movie2.mp4',
        'movie3': 'videos/movie3.mp4',
        // Thêm nhiều phim ở đây
    };

    function filterMovies(query) {
        const movies = movieList.querySelectorAll('li');
        movies.forEach(movie => {
            const title = movie.querySelector('.movie-title').textContent.toLowerCase();
            if (title.includes(query.toLowerCase())) {
                movie.style.display = '';
            } else {
                movie.style.display = 'none';
            }
        });
    }

    searchInput.addEventListener('input', (e) => {
        filterMovies(e.target.value);
    });

    movieList.addEventListener('click', (e) => {
        if (e.target.closest('a')) {
            e.preventDefault();
            const movieId = e.target.closest('a').getAttribute('data-movie');
            const movieSrc = movies[movieId];
            const movieName = e.target.closest('a
