console.log("the musical web");

/*SECOND VERSION*/

document.addEventListener('DOMContentLoaded', (event) => {
  
    const WindyText = document.getElementById('WindyText');
    const WindyAudio = new Audio('Wind.mp3');
    WindyAudio.loop = true;
    WindyText.style.color = 'white';
    let WindyisPlaying = false;
  
    const BirdyText = document.getElementById('BirdyText');
    const BirdyAudio = new Audio('Birds_withoutspace.mp3');
    BirdyAudio.loop = true;
    BirdyText.style.color = 'white';
    let BirdyisPlaying = false;
  
    const TrafficeyText = document.getElementById('TrafficeyText');
    const TrafficeyAudio = new Audio('Traffic_withoutspace.mp3');
    TrafficeyAudio.loop = true;
    TrafficeyText.style.color = 'white';
    let TrafficeyisPlaying = false;

    WindyText.addEventListener('click', () => {
      if (WindyisPlaying) {
            WindyAudio.pause();
            WindyText.style.color = 'white';
        } else {
            WindyAudio.play();
            WindyText.style.color = 'yellow';
        }
        WindyisPlaying = !WindyisPlaying;
    });
   
    BirdyText.addEventListener('click', () => { 
      if (BirdyisPlaying) {
            BirdyAudio.pause();
            BirdyText.style.color = 'white';
        } else {
            BirdyAudio.play();
            BirdyText.style.color = 'yellow';
        }
        BirdyisPlaying = !BirdyisPlaying;
    });
  
    TrafficeyText.addEventListener('click', () => {
        if (TrafficeyisPlaying) {
            TrafficeyAudio.pause();
            TrafficeyText.style.color = 'white';
        } else {
            TrafficeyAudio.play();
            TrafficeyText.style.color = 'yellow';
        }
        TrafficeyisPlaying = !TrafficeyisPlaying;
    });
});

/*FIRST VERSION*/

/*const windy = function () {
  var windyAudio = new Audio(
    "Wind.mp3"
  );
  windyAudio.addEventListener(
    "ended",
    function () {
      this.currentTime = 0;
      this.play();
    },
    false
  );
  windyAudio.play();
};

const trafficey = function () {
  var trafficeyAudio = new Audio(
    "Traffic_withoutspace.mp3"
  );
  trafficeyAudio.addEventListener(
    "ended",
    function () {
      this.currentTime = 0;
      this.play();
    },
    false
  );
  trafficeyAudio.play();
};

const birdy = function () {
  var birdyAudio = new Audio(
    "Birds_withoutspace.mp3"
  );
  birdyAudio.addEventListener(
    "ended",
    function () {
      this.currentTime = 0;
      this.play();
    },
    false
  );
  birdyAudio.play();
};*/
