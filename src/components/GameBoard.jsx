let React = require('react');
let LetterPadContainer = require('./LetterPadContainer.jsx');
let ImagePadContainer = require('./ImagePadContainer.jsx');
let WrongDisplay = require('./WrongDisplay.jsx');
let SuccessDisplay = require('./SuccessDisplay.jsx');
let DataManager = require('../DataManager.js');
let AudioPlayer = require('../AudioPlayer.js');

let GameBoard = React.createClass({
    getInitialState() {
        return {
            isLoading: true,
            selectedLetter: null,
            selectedImage: null,
            images: [],
            discoveredImages: [],
            isWrong: false,
            allDiscovered: false
        };
    },

    componentDidMount() {
        Promise.all([
                SuccessDisplay.imgPromise,
                WrongDisplay.imgPromise,
                AudioPlayer.preloadPromise
        ]).then(() => {
            this.setState({isLoading: false});
        });

        this.doReset();
    },

    onLetterSelection(letter) {
        let sel = letter === this.state.selectedLetter ? null : letter;
        this.setState({selectedLetter: sel}, () => this.checkDiscovery());
    },

    onImageSelection(name,conf) {
        let sel = name === this.state.selectedImage && this.state.selectedImage.name ? null : conf;
        this.setState({selectedImage: sel}, () => this.checkDiscovery());
    },

    checkDiscovery() {
        if (this.state.selectedLetter && this.state.selectedImage) {
            let re = new RegExp('^'+this.state.selectedLetter,'i');
            if (this.state.selectedImage.name.match(re)) {
                this.discover(this.state.selectedImage);
            } else {
                this.wrong();
            }
        }
    },

    discover(selectedImage) {
        let discovered = this.state.discoveredImages;

        if (selectedImage.soundUrl) {
            AudioPlayer.play(selectedImage.soundUrl);
        }

        discovered.push(selectedImage.name);

        this.setState({
            discoveredImages: discovered,
            selectedImage: null,
            selectedLetter: null,
            allDiscovered: discovered.length === this.state.images.length ? true : false
        });

    },

    wrong() {
        this.setState({
            selectedImage: null,
            selectedLetter: null,
            isWrong: true
        });
    },

    doReset(e) {
        if (e) e.preventDefault();
        this.setState({
            images: DataManager.getRandomImages(12),
            selectedImage: null,
            selectedLetter: null,
            discoveredImages: [],
            allDiscovered: false
        });
    },

    resetWrongState: function() {
        this.setState({isWrong: false});
    },

    render() {
        let selected = this.state.selectedImage ? this.state.selectedImage.name : null;
        let wrong = this.state.isWrong ? (<WrongDisplay onDone={this.resetWrongState} />) : null;
        let success = this.state.allDiscovered ? (<SuccessDisplay onDone={this.doReset} />) : null;
        let content = (
            <div className="game-board">
                <ImagePadContainer
                    images={this.state.images}
                    selectedImage={selected}
                    discoveredImages={this.state.discoveredImages}
                    onClick={this.onImageSelection} />

                <LetterPadContainer
                    letters={DataManager.letters}
                    onClick={this.onLetterSelection}
                    selected={this.state.selectedLetter} />

                {wrong}
                {success}
            </div>
        );
        let loader = <div><img src="resources/ajax-loader.gif" /></div>;
        if (this.state.isLoading) {
            return loader;
        } else {
            return content;
        }
    }
});

module.exports = GameBoard;
