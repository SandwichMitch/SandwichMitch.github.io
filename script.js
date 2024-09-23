function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

function changeVideo(videoId) {
    const iframe = document.getElementById('videoPlayer');
    iframe.src = `https://www.youtube.com/embed/${videoId}`;
  }