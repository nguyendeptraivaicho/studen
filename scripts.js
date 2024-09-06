document.addEventListener('DOMContentLoaded', () => {
    const movieList = document.getElementById('movie-list');
    const searchInput = document.getElementById('search-input');

    // Tìm kiếm phim
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
});
