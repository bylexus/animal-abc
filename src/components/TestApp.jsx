var React = require('react');
var LetterPadContainer = require('./LetterPadContainer.jsx');
var LetterPad = require('./LetterPad.jsx');
var ImagePad = require('./ImagePad.jsx');
var ImagePadContainer = require('./ImagePadContainer.jsx');

var toggle = false;
var letters = ['A','B','C','D','E','F','G','H','SCH'];
var selected1 = ['A','D','SCH'];
var selected2 = ['B','C','D','E'];

var images = [
    {name: 'Schaf', imageUrl: 'resources/animal-images/schaf1.jpg'},
    {name: 'Kuh', imageUrl: 'resources/animal-images/cow1.jpg'},
    {name: 'Affe', imageUrl: 'resources/animal-images/ape1.jpg'}
];

var discoveredImages = ['Schaf'];

let TestApp = React.createClass({
    getInitialState() {
        return {
            letterPadToggle: false,
            letterPadContainerSelected: null,
            imagePadContainerSelected: null
        }
    },

    msg(msg) {
        alert(msg);
    },

    toggleLetterPadSelection(letter) {
        if (letter === this.state.letterPadContainerSelected) {
            this.setState({letterPadContainerSelected: null});
        } else {
            this.setState({letterPadContainerSelected: letter });
        }
    },

    toggleLetterPad() {
        this.setState({letterPadToggle: !this.state.letterPadToggle});
    },

    toggleImagePadSelection(name) {
        if (name === this.state.imagePadContainerSelected) {
            this.setState({imagePadContainerSelected: null});
        } else {
            this.setState({imagePadContainerSelected: name });
        }
    },

    render() {
    return <div>

        <h2>LetterPadTests</h2>
        <LetterPad key="A" letter="A" selected={this.state.letterPadToggle} onClick={this.msg}/>
        <LetterPad key="B" letter="B" selected={!this.state.letterPadToggle} onClick={this.msg}/>
        <LetterPad key="C" letter="C" selected={this.state.letterPadToggle} onClick={this.msg}/>
        <button type="button" onClick={this.toggleLetterPad}>Toggle</button>

        <h2>LetterPadContainerTest</h2>
        <LetterPadContainer letters={letters} selected={this.state.letterPadContainerSelected} onClick={this.toggleLetterPadSelection}/>
        <div>Selected: {this.state.letterPadContainerSelected}</div>

        <h2>ImagePadTest</h2>
        <ImagePad name="Schaf" imageUrl="resources/animal-images/schaf1.jpg" onClick={this.msg} discovered={true}/>
        <ImagePad name="Kuh" imageUrl="resources/animal-images/cow1.jpg" onClick={this.msg} discovered={false} />
        <ImagePad name="Affe" imageUrl="resources/animal-images/ape1.jpg" onClick={this.msg} selected={true} />

        <h2>ImagePadContainerTest</h2>
        <ImagePadContainer
            images={images}
            selectedImage={this.state.imagePadContainerSelected}
            discoveredImages={discoveredImages}
            onClick={this.toggleImagePadSelection} />
        <div>Selected: {this.state.imagePadContainerSelected}</div>
    </div>
    }
});

module.exports = TestApp;
