// Ambil elemen dari DOM
const audioFileInput = document.getElementById('audio-file');
const audioPlayer = document.getElementById('audio-player');
const playPauseButton = document.getElementById('play-pause-button');
const audioSource = document.getElementById('audio-source');

// Ketika pengguna memilih file audio
audioFileInput.addEventListener('change', (event) => {
    const file = event.target.files[0]; // Dapatkan file yang dipilih
    if (file) {
        const url = URL.createObjectURL(file); // Buat URL objek untuk file yang dipilih
        audioSource.src = url; // Atur src untuk elemen <audio>
        audioPlayer.load(); // Muat audio
        playPauseButton.disabled = false; // Aktifkan tombol Play/Pause
        playPauseButton.textContent = 'Play'; // Set tombol ke "Play"
    }
});

// Fungsi untuk play/pause audio
playPauseButton.addEventListener('click', () => {
    if (audioPlayer.paused) {
        audioPlayer.play(); // Putar audio
        playPauseButton.textContent = 'Pause'; // Ganti tombol ke "Pause"
    } else {
        audioPlayer.pause(); // Jeda audio
        playPauseButton.textContent = 'Play'; // Ganti tombol ke "Play"
    }
});

