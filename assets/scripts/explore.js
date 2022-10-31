// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const synth = window.speechSynthesis;
  let voices = [];
  const voiceSelect = document.getElementById('voice-select');
  const img = document.querySelector('img');
  const text = document.getElementById("text-to-speak");
  const button = document.querySelector('button');

  synth.addEventListener('voiceschanged', () => {
    voices = synth.getVoices();
    for (let i = 0; i < voices.length; i++) {
      const option = document.createElement('option');
      option.textContent = `${voices[i].name} (${voices[i].lang})`; // display
      if (voices[i].default) {
        option.textContent += ' — DEFAULT';
      }
      option.setAttribute('data-lang', voices[i].lang);
      option.setAttribute('data-name', voices[i].name);
      voiceSelect.appendChild(option);
    }
  });

  button.addEventListener('click', () => {
    const utterThis = new SpeechSynthesisUtterance(text.value);
    synth.speak(utterThis);
    if(synth.speaking){
      face.src = "assets/images/smiling-open.png";
    }
    else {
      image.src = "assets/images/smiling.png";
    }
  });
}
