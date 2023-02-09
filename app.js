var audio = new Audio('/images/Hotpotatoesong.mp3');
var playButton = document.getElementById('wiggle');

audio.oncanplaythrough = function() {
  playButton.addEventListener('click', function() {
    audio.play();
    console.log("Button Clicked!")
  });
};