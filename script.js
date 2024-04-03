document.addEventListener("DOMContentLoaded", function () {
  const videoFileInput = document.getElementById("video-file");
  const trimButton = document.getElementById("trim-button");
  const addMusicButton = document.getElementById("add-music-button");
  const mergeClipsButton = document.getElementById("merge-clips-button");
  const videoPlayer = document.getElementById("video-player");
  const editedVideo = document.getElementById("edited-video");

  let videoData = null;

  videoFileInput.addEventListener("change", function (event) {
    const file = event.target.files[0];
    videoData = URL.createObjectURL(file);
    videoPlayer.src = videoData;
  });

  trimButton.addEventListener("click", function () {
    if (!videoData) return;

    // Simulate trimming (show the first 5 seconds of the video)
    videoPlayer.currentTime = 0;
    videoPlayer.play();
    videoPlayer.onpause = function () {
      videoPlayer.currentTime = 0;
      videoPlayer.pause();
      editedVideo.src = videoData;
      editedVideo.style.display = "block";
    };
  });

  addMusicButton.addEventListener("click", function () {
    if (!videoData) return;

    // Play the audio
    audio.play();
  });

  mergeClipsButton.addEventListener("click", function () {
    if (!videoData) return;

    // Simulate merging clips (play the video twice)
    editedVideo.src = videoData;
    editedVideo.style.display = "block";
    editedVideo.loop = true;
    editedVideo.play();
  });
});

const mobileScreen = window.matchMedia("(max-width: 990px )");
$(document).ready(function () {
  $(".dashboard-nav-dropdown-toggle").click(function () {
    $(this)
      .closest(".dashboard-nav-dropdown")
      .toggleClass("show")
      .find(".dashboard-nav-dropdown")
      .removeClass("show");
    $(this).parent().siblings().removeClass("show");
  });
  $(".menu-toggle").click(function () {
    if (mobileScreen.matches) {
      $(".dashboard-nav").toggleClass("mobile-show");
    } else {
      $(".dashboard").toggleClass("dashboard-compact");
    }
  });
});

// script for index2

// Get all the links in the navbar
const links = document.querySelectorAll("mynav li a");

// Loop through each link and add click event listener
links.forEach((link) => {
  link.addEventListener("click", function () {
    // Remove the 'active' class from all links
    links.forEach((l) => l.classList.remove("active"));

    // Add 'active' class to the clicked link
    this.classList.add("active");
  });
});
