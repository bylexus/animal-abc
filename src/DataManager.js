const letters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','Sch','Ch'];
const images = [
    {name: 'Affe', imageUrl: 'resources/animal-images/ape1.jpg',soundUrl: 'resources/animal-sounds/chimpanzee1.mp3'},
    {name: 'Bär', imageUrl: 'resources/animal-images/bear1.jpg',soundUrl: 'resources/animal-sounds/bear1.mp3'},
    {name: 'Chamäleon', fontSize: '2vw',imageUrl: 'resources/animal-images/chameleon1.jpg'},
    {name: 'Dachs', imageUrl: 'resources/animal-images/dachs1.jpg',soundUrl: 'resources/animal-sounds/dachs1.mp3'},
    {name: 'Kuh', imageUrl: 'resources/animal-images/cow1.jpg', soundUrl: 'resources/animal-sounds/cow1.mp3'},
    {name: 'Schaf', imageUrl: 'resources/animal-images/schaf1.jpg', soundUrl: 'resources/animal-sounds/schaf1.mp3'}

];

let getRandomImages = function(nr) {
    let randImgs = [];
    let tries = 0;
    nr = Math.min(nr || images.length,images.length);

    while (nr > 0) {
        if (tries > 20) return randImgs;
        let img = images[Math.round(Math.random()*(images.length-1))];
        if (randImgs.indexOf(img) > -1) {
            tries++;
            continue;
        } else {
            tries = 0;
            nr--;
            randImgs.push(img);
        }
    }
    return randImgs;
};

module.exports = {
    letters,
    getRandomImages
}
