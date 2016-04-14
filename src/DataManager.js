const letters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','Sch','Ch'];
const images = [
    {name: 'Affe', imageUrl: 'resources/animal-images/ape1.jpg',soundUrl: 'resources/animal-sounds/chimpanzee1.mp3'},
    {name: 'Bär', imageUrl: 'resources/animal-images/bear1.jpg',soundUrl: 'resources/animal-sounds/bear1.mp3'},
    {name: 'Chamäleon', fontSize: '2vw',imageUrl: 'resources/animal-images/chameleon1.jpg'},
    {name: 'Dachs', imageUrl: 'resources/animal-images/dachs1.jpg',soundUrl: 'resources/animal-sounds/dachs1.mp3'},
    {name: 'Elefant', imageUrl: 'resources/animal-images/elefant1.jpg',soundUrl: 'resources/animal-sounds/elefant1.mp3'},
    {name: 'Esel', imageUrl: 'resources/animal-images/esel1.jpg',soundUrl: 'resources/animal-sounds/esel1.mp3'},
    {name: 'Eichhörnchen', fontSize: '2vw', imageUrl: 'resources/animal-images/eichhoernchen.jpg',soundUrl: 'resources/animal-sounds/eichhoernchen1.mp3'},
    {name: 'Eidechse',  imageUrl: 'resources/animal-images/eidechse1.jpg'},
    {name: 'Elster',  imageUrl: 'resources/animal-images/elster1.jpg',soundUrl: 'resources/animal-sounds/elster1.mp3'},
    {name: 'Frosch', imageUrl: 'resources/animal-images/frosch1.jpg',soundUrl: 'resources/animal-sounds/frosch1.mp3'},
    {name: 'Fisch', imageUrl: 'resources/animal-images/fisch1.jpg'},
    {name: 'Fasan', imageUrl: 'resources/animal-images/fasan1.jpg',soundUrl: 'resources/animal-sounds/fasan1.mp3'},
    {name: 'Gans', imageUrl: 'resources/animal-images/gans1.jpg'},
    {name: 'Gepard', imageUrl: 'resources/animal-images/gepard1.jpg'},
    {name: 'Hummel', imageUrl: 'resources/animal-images/hummel1.jpg'},
    {name: 'Hund', imageUrl: 'resources/animal-images/hund1.jpg'},
    {name: 'Hirsch', imageUrl: 'resources/animal-images/hirsch1.jpg'},
    {name: 'Igel', imageUrl: 'resources/animal-images/igel1.jpg'},
    {name: 'Jaguar', imageUrl: 'resources/animal-images/jaguar1.jpg'},
    {name: 'Kamel', imageUrl: 'resources/animal-images/kamel1.jpg'},
    {name: 'Kaulquappe', imageUrl: 'resources/animal-images/kaulquappe1.jpg'},
    {name: 'Kuh', imageUrl: 'resources/animal-images/cow1.jpg', soundUrl: 'resources/animal-sounds/cow1.mp3'},
    {name: 'Krokodil', imageUrl: 'resources/animal-images/krokodil1.jpg'},
    {name: 'Leguan', imageUrl: 'resources/animal-images/leguan1.jpg'},
    {name: 'Luchs', imageUrl: 'resources/animal-images/luchs1.jpg'},
    {name: 'Maus', imageUrl: 'resources/animal-images/maus1.jpg'},
    {name: 'Muschel', imageUrl: 'resources/animal-images/muschel1.jpg'},
    {name: 'Nilpferd', imageUrl: 'resources/animal-images/nilpferd1.jpg'},
    {name: 'Nashorn', imageUrl: 'resources/animal-images/nashorn1.jpg'},
    {name: 'Otter', imageUrl: 'resources/animal-images/otter1.jpg'},
    {name: 'Okapi', imageUrl: 'resources/animal-images/okapi1.jpg'},
    {name: 'Panter', imageUrl: 'resources/animal-images/panter1.jpg'},
    {name: 'Panda', imageUrl: 'resources/animal-images/panda1.jpg'},
    {name: 'Qualle', imageUrl: 'resources/animal-images/qualle1.jpg'},
    {name: 'Rentier', imageUrl: 'resources/animal-images/rentier1.jpg'},
    {name: 'Reh', imageUrl: 'resources/animal-images/reh1.jpg'},
    {name: 'Schaf', imageUrl: 'resources/animal-images/schaf1.jpg', soundUrl: 'resources/animal-sounds/schaf1.mp3'},
    {name: 'Schildkröte', fontSize: '2vw', imageUrl: 'resources/animal-images/schildkroete1.jpg'},
    {name: 'Schwein', imageUrl: 'resources/animal-images/schwein1.jpg'},
    {name: 'Tiger', imageUrl: 'resources/animal-images/tiger1.jpg'},
    {name: 'Tapir', imageUrl: 'resources/animal-images/tapir1.jpg'},
    {name: 'Uhu', imageUrl: 'resources/animal-images/uhu1.jpg'},
    {name: 'Vielfrass', imageUrl: 'resources/animal-images/vielfrass1.jpg'},
    {name: 'Wisent', imageUrl: 'resources/animal-images/wisent1.jpg'},
    {name: 'Wal', imageUrl: 'resources/animal-images/wal1.jpg'},
    {name: 'Walross', imageUrl: 'resources/animal-images/walross1.jpg'},
    {name: 'Yak', imageUrl: 'resources/animal-images/yak1.jpg'},
    {name: 'Zebra', imageUrl: 'resources/animal-images/zebra1.jpg'}
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
