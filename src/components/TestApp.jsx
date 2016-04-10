var React = require('react');
var LetterPadContainer = require('./LetterPadContainer.jsx');
var LetterPad = require('./LetterPad.jsx');

var toggle = false;
var selected1 = ['A','D','Sch'];
var selected2 = ['B','C','D','E'];

let TestApp = React.createClass({
    getInitialState() {
        return {
            letterPadToggle: false,
            letterPadContainerToggle: selected1
        }
    },

    msg(msg) {
        alert(msg);
    },

    toggleLetterPadSelection() {
        this.setState({letterPadContainerToggle: this.state.letterPadContainerToggle === selected1 ? selected2 : selected1});
    },

    toggleLetterPad() {
        this.setState({letterPadToggle: !this.state.letterPadToggle});
    },

    render() {
    return <div>

        <h2>LetterPadContainerTest</h2>
        <LetterPadContainer letters={['A','B','C','D','E','F','G','H','Sch']} selectedLetters={this.state.letterPadContainerToggle} />
        <button type="button" onClick={this.toggleLetterPadSelection}>Toggle</button>

        <h2>LetterPadTests</h2>
        <LetterPad key="A" letter="A" selected={this.state.letterPadToggle} onClick={this.msg}/>
        <LetterPad key="B" letter="B" selected={!this.state.letterPadToggle} onClick={this.msg}/>
        <LetterPad key="C" letter="C" selected={this.state.letterPadToggle} onClick={this.msg}/>
        <button type="button" onClick={this.toggleLetterPad}>Toggle</button>
    </div>
    }
});

module.exports = TestApp;
