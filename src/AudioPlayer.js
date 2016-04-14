let audio = document.createElement('audio');
document.body.appendChild(audio);


let play = function(url) {
    audio.src = url;
    audio.load();
    audio.play();
};

module.exports = {
    play
}
