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
    button.className = 'btn btn-color-1'; 
    const projectText = document.getElementById('project-text');
    switch (button.id) {
        case 'btnVFX':
            projectText.textContent = 'This is my Editing and VFX reel! This reel highlights some of my favorite works from the past couple of years. I really wanted to highlight my editing style and rhythm with this reel. Some of my favorite techniques are to use digital editing and visual effects techniques to recreate the look of analog or other mediums. As you can see from the beginning of the reel, I created a 50’s film look, as well as a VHS found-footage look for two of my short films that called for a different look than the traditional crisp and sharp digital footage of the cameras I shoot with. These were some of my favorite edits, as it required some thinking outside the box on-set as well as in post on how exactly I could achieve the look I was going for.';
            break;
        case 'btnRushVideo':
            projectText.textContent = 'Cinematography showreel of my work from the 2024 - 2025 Academic Year.';
            break;
        case 'btnShortFilm':
            projectText.textContent = 'Dialogueless short film created as my final project for my Cinematography clasas.';
            break;
        default:
            projectText.textContent = 'This is my Editing and VFX reel! This reel highlights some of my favorite works from the past couple of years. I really wanted to highlight my editing style and rhythm with this reel. Some of my favorite techniques are to use digital editing and visual effects techniques to recreate the look of analog or other mediums. As you can see from the beginning of the reel, I created a 50’s film look, as well as a VHS found-footage look for two of my short films that called for a different look than the traditional crisp and sharp digital footage of the cameras I shoot with. These were some of my favorite edits, as it required some thinking outside the box on-set as well as in post on how exactly I could achieve the look I was going for.';
    }
     // Update the lastButtonPressed variable
   lastButtonPressed = button;
}

function toggleGrid() {
    const container = document.getElementById('projectGridContainer');
    const button = document.querySelector('.toggle-button');
    if (container.classList.contains('expanded')) {
      container.classList.remove('expanded'); // Collapse the grid
      button.textContent = 'SHOW FULL FILM AND VIDEO CATALOG';
    } else {
      container.classList.add('expanded'); // Expand the grid
      button.textContent = 'HIDE FULL FILM AND VIDEO CATALOG';
    }
}