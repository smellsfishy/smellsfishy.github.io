const navBar = `
    <nav class="sidebar" id="sidebar">
        <a href="#" class="close-btn" id="close-btn">&times;</a>
        <ul>
            <li><a href="/index.html">Home</a></li>
            <li><a href="/about.html">About</a></li>
            <li><a href="/voltfish/index.html">Voltfish</a></li>
            <li><a href="/boat2busan/index.html">Boat2Busan</a></li>
        </ul>
    </nav>
`;

document.body.insertAdjacentHTML('afterbegin', navBar);

if (window.innerWidth < 768) {
    const openBtn = document.getElementById('open-btn');
    const closeBtn = document.getElementById('close-btn');
    const sidebar = document.getElementById('sidebar');
    const mainContent = document.getElementById('main-content');

    openBtn.addEventListener('click', () => {
        sidebar.style.width = '250px';
        mainContent.style.marginLeft = '250px';
    });

    closeBtn.addEventListener('click', () => {
        sidebar.style.width = '0';
        mainContent.style.marginLeft = '0';
    });

    let touchstartX = 0;
    let touchendX = 0;

    function handleGesture() {
        if (touchendX < touchstartX && touchstartX - touchendX > 50) {
            // Swiped left
            sidebar.style.width = '0';
            mainContent.style.marginLeft = '0';
        }
        if (touchendX > touchstartX && touchendX - touchstartX > 50) {
            // Swiped right
            sidebar.style.width = '250px';
            mainContent.style.marginLeft = '250px';
        }
    }

    document.addEventListener('touchstart', e => {
        touchstartX = e.changedTouches[0].screenX;
    });

    document.addEventListener('touchend', e => {
        touchendX = e.changedTouches[0].screenX;
        handleGesture();
    });
}
