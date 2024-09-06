document.addEventListener('DOMContentLoaded', () => {
    const comicPage = document.querySelector('.comic-page');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');

    const pages = [
        'page1.jpg',
        'page2.jpg',
        'page3.jpg',
        // Thêm nhiều trang ở đây
    ];

    let currentPage = 0;

    function showPage(pageIndex) {
        if (pageIndex < 0 || pageIndex >= pages.length) return;
        comicPage.innerHTML = `<img src="${pages[pageIndex]}" alt="Page ${pageIndex + 1}">`;
        currentPage = pageIndex;
    }

    prevBtn.addEventListener('click', () => {
        if (currentPage > 0) {
            showPage(currentPage - 1);
        }
    });

    nextBtn.addEventListener('click', () => {
        if (currentPage < pages.length - 1) {
            showPage(currentPage + 1);
        }
    });

    // Hiển thị trang đầu tiên khi trang được tải
    showPage(currentPage);
});
