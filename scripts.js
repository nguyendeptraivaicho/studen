document.addEventListener('DOMContentLoaded', () => {
    const movieList = document.getElementById('movie-list');
    const searchBar = document.getElementById('search-bar');

    const movies = [
        {
            title: 'Movie 1',
            image: 'https://via.placeholder.com/200x300',
            description: 'Description of Movie 1.'
        },
        {
            title: 'Movie 2',
            image: 'https://via.placeholder.com/200x300',
            description: 'Description of Movie 2.'
        },
        {
            title: 'Movie 3',
            image: 'https://via.placeholder.com/200x300',
            description: 'Description of Movie 3.'
        },
        // Thêm nhiều phim hơn ở đây
    ];

    function renderMovies(movieArray) {
        movieList.innerHTML = movieArray.map(movie => `
            <div class="movie-item">
                <img src="${movie.image}" alt="${movie.title}">
                <h3>${movie.title}</h3>
                <p>${movie.description}</p>
            </div>
        `).join('');
    }

    function filterMovies(searchTerm) {
        const filteredMovies = movies.filter(movie =>
            movie.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
        renderMovies(filteredMovies);
    }

    searchBar.addEventListener('input', () => {
        filterMovies(searchBar.value);
    });

    // Render danh sách phim khi trang được tải
    renderMovies(movies);
});
