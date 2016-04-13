let React = require('react');
let LetterPadContainer = require('./LetterPadContainer.jsx');
let ImagePadContainer = require('./ImagePadContainer.jsx');
let WrongDisplay = require('./WrongDisplay.jsx');
let DataManager = require('../DataManager.js');

let GameBoard = React.createClass({
    getInitialState() {
        return {
            selectedLetter: null,
            selectedImage: null,
            images: [],
            discoveredImages: [],
            isWrong: false
        };
    },

    componentDidMount() {
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
        let audio = document.getElementById('audioPlayer');

        if (selectedImage.soundUrl) {
            audio.src = selectedImage.soundUrl;
            audio.load();
            audio.play();
        }

        discovered.push(selectedImage.name);
        this.setState({
            discoveredImages: discovered,
            selectedImage: null,
            selectedLetter: null
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
            discoveredImages: []
        });
    },

    resetWrongState: function() {
        this.setState({isWrong: false});
    },

    render() {
        let selected = this.state.selectedImage ? this.state.selectedImage.name : null;
        let wrong = this.state.isWrong ? (<WrongDisplay onDone={this.resetWrongState} />) : null;
        return (
            <div>
                <div style={{
                    position: 'relative',
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'stretch'
                }}>
                    <div style={{
                        flexGrow: '1',
                        padding: '1em',
                        backgroundColor: '#eee',
                        borderLeft: '1px solid #888',
                        borderTop: '1px solid #888',
                        borderBottom: '1px solid #888'}}>
                        <ImagePadContainer
                            images={this.state.images}
                            selectedImage={selected}
                            discoveredImages={this.state.discoveredImages}
                            onClick={this.onImageSelection} />
                    </div>

                    <div style={{
                        width: '40vw',
                        minWidth: '30vw',
                        padding: '1em',
                        backgroundColor: '#eee',
                        border: '1px solid #888'}}>
                        <LetterPadContainer
                            letters={DataManager.letters}
                            onClick={this.onLetterSelection}
                            selected={this.state.selectedLetter} />
                    </div>

                    {wrong}
                </div>

                <div style={{textAlign: 'center',marginTop: '2em'}}>
                    <a href="#" style={{
                        display: 'inline-block',
                        width: '1em',
                        height: '1em',
                        fontSize: '3.5em',
                        textDecoration: 'none',
                        color: 'white',
                        backgroundColor: '#080',
                        textAlign: 'center',
                        lineHeight: '1em',
                        verticalAlign: 'middle',
                        border: '1px solid black',
                        padding: '0.2em',
                        borderRadius: '100%'
                    }} onClick={this.doReset}>↺</a></div>


            </div>
        );
    }
});

module.exports = GameBoard;
