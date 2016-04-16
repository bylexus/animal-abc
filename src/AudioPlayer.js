let audio = new Audio();
let Preloader = require('./Preloader.js');

let preloadedAudios = {
    'success': {url: 'resources/tadaa.mp3', audioObject: null},
    'wrong': {url: 'resources/honk.mp3', audioObject: null}
};


let play = function(url) {
    if (preloadedAudios[url] && preloadedAudios[url].audioObject) {
        preloadedAudios[url].audioObject.play();
        return;
    }
    audio.src = url;
    audio.load();
    audio.play();
};

let audioPromises = [];
Array.forEach(Object.keys(preloadedAudios), (key) => {
    let conf = preloadedAudios[key];
    audioPromises.push(Preloader.getAudioPromise(conf.url).then((obj) => conf.audioObject = obj));
});


module.exports = {
    play,
    preloadPromise: Promise.all(audioPromises)
}

