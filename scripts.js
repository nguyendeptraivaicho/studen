document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('search-input');
    const movieList = document.getElementById('movie-list-ul');
    const movies = Array.from(movieList.getElementsByClassName('movie-item'));

    searchInput.addEventListener('input', () => {
        const query = searchInput.value.toLowerCase();

        movies.forEach(movie => {
            const title = movie.querySelector('h3').textContent.toLowerCase();
            if (title.includes(query)) {
                movie.style.display = '';
            } else {
                movie.style.display = 'none';
            }
        });
    });
});
