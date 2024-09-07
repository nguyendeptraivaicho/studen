document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const movieId = urlParams.get('id');

    const movies = [
        {
            id: 1,
            title: 'Phim 1',
            episodes: [
                { title: 'Tập 1', video: 'video1-1.mp4' },
                { title: 'Tập 2', video: 'video1-2.mp4' }
            ]
        },
        {
            id: 2,
            title: 'Phim 2',
            episodes: [
                { title: 'Tập 1', video: 'video2-1.mp4' },
                { title: 'Tập 2', video: 'video2-2.mp4' },
                { title: 'Tập 3', video: 'video2-3.mp4' }
            ]
        }
        // Thêm phim khác
    ];

    const movie = movies.find(m => m.id == movieId);

    if (movie) {
        document.getElementById('movie-title').textContent = movie.title;

        const videoElement = document.getElementById('movie-video');
        const episodeList = document.getElementById('episode-list');
        
        // Đặt tập đầu tiên làm video phát mặc định
        if (movie.episodes.length > 0) {
            videoElement.src = movie.episodes[0].video;
        }

        // Hiển thị danh sách tập phim
        movie.episodes.forEach((episode, index) => {
            const episodeItem = document.createElement('div');
            episodeItem.innerHTML = `<a href="#" data-video="${episode.video}">${episode.title}</a>`;
            episodeItem.querySelector('a').addEventListener('click', (event) => {
                event.preventDefault();
                videoElement.src = episode.video;
                videoElement.play();
            });
            episodeList.appendChild(episodeItem);
        });
    } else {
        document.body.innerHTML = '<h2>Phim không tồn tại!</h2>';
    }
});
