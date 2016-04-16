let loadedImages = {};
let getImagePromise = function(url) {
    return new Promise((resolve,reject) => {
        if (loadedImages[url]) {
            resolve(loadedImages[url])
        } else {
            let img = new Image();
            img.onload = (() => {
                loadedImages[url] = img;
                resolve(img);
            });
            img.onerror = reject;
            img.src = url;
        }
    });
};

let loadedAudios = {};
let getAudioPromise = function(url) {
    return new Promise((resolve,reject) => {
        if (loadedAudios[url]) {
            resolve(loadedAudios[url])
        } else {
            let audio = new Audio();
            audio.oncanplaythrough = (() => {
                loadedAudios[url] = audio;
                resolve(audio);
            });
            audio.onerror = reject;
            audio.src = url;
        }
    });
};

let getPreloadedImage = function(url) {
    return loadedImages[url];
};

let getPreloadedAudio = function(url) {
    return loadedAudios[url];
};

module.exports = {
    getImagePromise,
    getAudioPromise,
    getPreloadedImage,
    getPreloadedAudio
};
