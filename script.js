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
            projectText.textContent = 'This is the rush video I shot and edited for my Fraternity, Delta Upsilon during my term as Public Relations Chair. This was a super fun project and I got to dip my toes into commercial editing and highlight what makes my brotherhood special on video. The reception was also stellar! This rush video pulled <i>thousands</i> of views on our instagram page, and I met a lot of people at rush that fall who were brought in by my video, which made my whole week.';
            break;
        case 'btnShortFilm':
            projectText.textContent = 'I was feeling particularly stressed managing my grades in my first semester of college as I feared losing my grade-based scholarship that covered my tuition. To blow off steam, I got together with a couple of my new friends in Buzz Studios, and we produced a parody of Breaking Bad centered around a student at a certain unnamed bee-themed university resorting to cooking adderall to pay off his student debt after losing his scholarship. I’ll never forget the night we premiered this movie to the campus. When that theater filled with the laughter of a hundred students, I knew that I had accomplished my goal as a director of making a piece of art that my community can appreciate, laugh at, and love.';
            break;
        default:
            projectText.textContent = 'This is my Editing and VFX reel! This reel highlights some of my favorite works from the past couple of years. I really wanted to highlight my editing style and rhythm with this reel. Some of my favorite techniques are to use digital editing and visual effects techniques to recreate the look of analog or other mediums. As you can see from the beginning of the reel, I created a 50’s film look, as well as a VHS found-footage look for two of my short films that called for a different look than the traditional crisp and sharp digital footage of the cameras I shoot with. These were some of my favorite edits, as it required some thinking outside the box on-set as well as in post on how exactly I could achieve the look I was going for.';
    }
     // Update the lastButtonPressed variable
   lastButtonPressed = button;
}