// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const img1 = document.querySelector('img');
  const hornSelect = document.getElementById('horn-select');
  const volumeControl = document.getElementById('volume');
  const img2 = document.getElementsByTagName('img')[1];
  const button = document.querySelector('button');
  const audio = document.querySelector('audio');
  const jsConfetti = new JSConfetti();

  hornSelect.addEventListener('change', (event)=>
  {
    switch(event.target.value){
      case 'air-horn':
        img1.src = "assets/images/air-horn.svg";
        audio.src="assets/audio/air-horn.mp3";
        break;
      case 'car-horn':
        img1.src="assets/images/car-horn.svg";
        audio.src="assets/audio/car-horn.mp3";
        break;
      case 'party-horn':
        img1.src="assets/images/party-horn.svg";
        audio.src="assets/audio/party-horn.mp3";
        break;
    }

    volume.addEventListener('change', (event)=>
    {
      const volume = event.target.value;
      if(volume == 0){
        img2.src = "assets/icons/volume-level-0.svg";
        audio.volume = event.target.value / 100;
      }
      else if(volume < 33){
        img2.src = "assets/icons/volume-level-1.svg";
        audio.volume = event.target.value / 100;
      }
      else if(volume < 67){
        img2.src = "assets/icons/volume-level-2.svg";
        audio.volume = event.target.value / 100;
      }
      else{
        img2.src = "assets/icons/volume-level-3.svg";
        audio.volume = event.target.value / 100;
      }
    }
    );

    button.addEventListener('click', ()=>
    {
      audio.play();
      if(event.target.value == 'party-horn'){
        jsConfetti.addConfetti();
      }
    }
    );
  }
  );
}
