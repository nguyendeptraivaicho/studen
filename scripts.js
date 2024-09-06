document.addEventListener('DOMContentLoaded', () => {
    const comicList = document.querySelector('.comic-list');
    const comicViewer = document.getElementById('comic-viewer');
    const comicPage = document.querySelector('.comic-page');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');

    const comics = {
        'comic1': ['images/comic1_page1.jpg', 'images/comic1_page2.jpg'],
        'comic2': ['images/comic2_page1.jpg', 'images/comic2_page2.jpg'],
        'comic3': ['images/comic3_page1.jpg', 'images/comic3_page2.jpg'],
        // Thêm nhiều bộ truyện ở đây
    };

    let currentComic = '';
    let currentPageIndex = 0;

    function showComic(comicName) {
        currentComic = comicName;
        currentPageIndex = 0;
        showPage(currentPageIndex);
    }

    function showPage(pageIndex) {
        if (pageIndex < 0 || pageIndex >= comics[currentComic].length) return;
        comicPage.innerHTML = `<img src="${comics[currentComic][pageIndex]}" alt="Page ${pageIndex + 1}">`;
        currentPageIndex = pageIndex;
    }

    comicList.addEventListener('click', (e) => {
        if (e.target.tagName === 'A') {
            e.preventDefault();
            const comicName = e.target.getAttribute('data-comic');
            showComic(comicName);
            comicViewer.style.display = 'block'; // Hiển thị khu vực xem truyện
        }
    });

    prevBtn.addEventListener('click', () => {
        if (currentPageIndex > 0) {
            showPage(currentPageIndex - 1);
        }
    });

    nextBtn.addEventListener('click', () => {
        if (currentPageIndex < comics[currentComic].length - 1) {
            showPage(currentPageIndex + 1);
        }
    });

    // Ẩn khu vực xem truyện khi chưa chọn bộ truyện
    comicViewer.style.display = 'none';
});
