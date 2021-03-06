const instance = new vidbg(
  ".video",
  {
    mp4: "video/world.mp4", // URL or relative path to MP4 video
    webm: "video/world.webpm", // URL or relative path to webm video
    poster: "video/poster.jpg", // URL or relative path to fallback image
    overlay: false, // Boolean to display the overlay or not
  },
  {
    // Attributes
  }
);
const rellax = new Rellax(".rocket");
window.onload = () => {
  if (document.body.clientWidth <= 768) {
    rellax.destroy();
  }
  AOS.init();
};
