let audio = new Audio();
let successAudio = null;
let wrongAudio = null;
let Preloader = require('./Preloader.js');


let play = function(url) {
    if (url === 'success' && successAudio) {
        successAudio.play();
        return;
    }
    if (url === 'wrong' && wrongAudio) {
        wrongAudio.play();
        return;
    }
    audio.src = url;
    audio.load();
    audio.play();
};

let successPromise = Preloader.getAudioPromise('resources/tadaa.mp3').then((obj) => successAudio = obj);
let wrongPromise= Preloader.getAudioPromise('resources/honk.mp3').then((obj) => wrongAudio = obj);


module.exports = {
    play,
    successPromise: successPromise,
    wrongPromise: wrongPromise
}

