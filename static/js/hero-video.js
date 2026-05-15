document.addEventListener("DOMContentLoaded", function () {

  const section = document.querySelector(".video-background");

  if (!section) return;

  const video = document.createElement("video");

  video.classList.add("hero-video");

  video.autoplay = true;
  video.muted = true;
  video.loop = true;
  video.playsInline = true;

  video.innerHTML = `
    <source src="/media/GSz14_flyto.mp4" type="video/mp4">
  `;

  section.prepend(video);

  video.addEventListener("canplay", () => {
    video.classList.add("loaded");
  });

});