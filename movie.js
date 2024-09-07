document.addEventListener('DOMContentLoaded', function () {
    const urlParams = new URLSearchParams(window.location.search);
    const movieId = urlParams.get('id');

    fetch(`/api/movies/${movieId}`)
        .then(response => response.json())
        .then(data => {
            document.getElementById('movie-title').innerText = data.movie.title;
            document.getElementById('movie-description').innerText = data.movie.description;

            const episodeList = document.getElementById('episode-list');
            data.movie.episodes.forEach(episode => {
                const episodeItem = document.createElement('div');
                episodeItem.innerHTML = `
                    <button onclick="playVideo('${episode.videoUrl}')">${episode.title}</button>
                `;
                episodeList.appendChild(episodeItem);
            });
        });

    window.playVideo = function (videoUrl) {
        document.getElementById('video-player').innerHTML = `
            <video controls width="600">
                <source src="${videoUrl}" type="video/mp4">
                Your browser does not support the video tag.
            </video>
        `;
    };
});
