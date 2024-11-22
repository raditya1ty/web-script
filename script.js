// Fungsi untuk membuka dan menutup menu
function toggleMenu() {
    const menu = document.getElementById('menu');
    const body = document.body;

    if (menu.style.width === '250px') {
        menu.style.width = '0'; // Tutup menu
        body.classList.remove('menu-open');
    } else {
        menu.style.width = '250px'; // Buka menu
        body.classList.add('menu-open');
    }
}


