document.addEventListener('DOMContentLoaded', () => {
    const movies = [
        {
            id: 1,
            title: 'Phim 1',
            image: 'image1.jpg'
        },
        {
            id: 2,
            title: 'Phim 2',
            image: 'image2.jpg'
        }
        // Thêm phim khác
    ];

    const movieList = document.getElementById('movie-list');
    
    movies.forEach(movie => {
        const movieItem = document.createElement('div');
        movieItem.className = 'movie-item';
        movieItem.innerHTML = `
            <a href="movie.html?id=${movie.id}">
                <img src="${movie.image}" alt="${movie.title}">
                <h3>${movie.title}</h3>
            </a>
        `;
        movieList.appendChild(movieItem);
    });

    // Xử lý tìm kiếm
    document.getElementById('search').addEventListener('input', (event) => {
        const query = event.target.value.toLowerCase();
        document.querySelectorAll('.movie-item').forEach(item => {
            const title = item.querySelector('h3').textContent.toLowerCase();
            item.style.display = title.includes(query) ? 'block' : 'none';
        });
    });
});
