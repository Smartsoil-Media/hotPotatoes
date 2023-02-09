// var audio = new Audio('/images/Hotpotatoesong.mp3');
// var playButton = document.getElementById('wiggle');

// audio.oncanplaythrough = function() {
//   playButton.addEventListener('click', function() {
//     audio.play();
//     console.log("Button Clicked!")
//   });
// };


// window.onload = function() {
//     let audio = new Audio("/images/Hotpotatoesong.mp3");
//     let playButton = document.getElementById('wiggle');
  
//     audio.onerror = function() {
//       console.error("Failed to load the audio file");
//     };
  
//     audio.oncanplay = function() {
//       playButton.addEventListener('click', function() {
//         audio.play();
//         console.log("Button Clicked!");
//       });
//     };
//   };



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