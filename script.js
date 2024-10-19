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

let lastButtonPressed = document.getElementById('btnVFX');; // Variable to track the last pressed button

function handleButtonClick(button) {
    // Reset the last button pressed, if there is one
      if (lastButtonPressed && lastButtonPressed !== button) {
          lastButtonPressed.className = 'btn btn-color-2'; // Change back to the original class
     }
     
      // Change the class of the currently pressed button
    button.className = 'btn btn-color-1'; // Change to the new class
    const projectText = document.getElementById('project-text');
    switch (button.id) {
        case 'btnVFX':
            projectText.textContent = 'This is the VFX and Editing Reel project.';
            break;
        case 'btnRushVideo':
            projectText.textContent = 'This is the Delta Upsilon Rush Video project.';
            break;
        case 'btnShortFilm':
            projectText.textContent = 'This is the Short Film: Buzzing Bad project.';
            break;
        default:
            projectText.textContent = 'This is the original project text.';
    }
     // Update the lastButtonPressed variable
   lastButtonPressed = button;
}