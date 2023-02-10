window.onload = function() {
    var audio = new Audio("/images/Hotpotatoesong.mp3");
    var playButton = document.getElementById('wiggle');
  
    audio.onerror = function() {
      console.error("Failed to load the audio file");
    };
  
    audio.oncanplay = function() {
      playButton.addEventListener('click', function() {
        if (audio.paused) {
          audio.play();
          console.log("Playing");
        } else {
          audio.pause();
          console.log("Paused");
        }
      });
    };
  };