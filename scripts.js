document.addEventListener('DOMContentLoaded', function () {
    const searchBar = document.getElementById('search-bar');

    searchBar.addEventListener('input', function () {
        const query = searchBar.value;
        // Gọi API để tìm kiếm phim và cập nhật danh sách phim
        fetch(`/api/movies?search=${query}`)
            .then(response => response.json())
            .then(data => {
                // Cập nhật danh sách phim
                const movieList = document.getElementById('movie-list');
                movieList.innerHTML = '';
                data.movies.forEach(movie => {
                    const movieItem = document.createElement('div');
                    movieItem.className = 'movie-item';
                    movieItem.innerHTML = `
                        <a href="movie.html?id=${movie.id}">
                            <img src="${movie.poster}" alt="${movie.title}">
                            <h2>${movie.title}</h2>
                        </a>
                    `;
                    movieList.appendChild(movieItem);
                });
            });
    });
});
