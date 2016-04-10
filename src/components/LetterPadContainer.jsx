var React = require('react');
var LetterPad = require('./LetterPad.jsx');

let LetterPadContainer = React.createClass({
    getStyles() {
        return {
            padding: '1em',
            backgroundColor: '#eee',
            border: '1px solid #888'
        };
    },

    isLetterSelected(letter) {
        let selected = this.props.selectedLetters || [];
        return selected.indexOf(letter) > -1;
    },

    render() {
        let letters = this.props.letters || [];
        return <div style={this.getStyles()}>
            {letters.map((letter) => {
                return (
                <LetterPad key={letter} letter={letter} selected={ this.isLetterSelected(letter) } />
                );
            })}

        </div>;
    }
});

module.exports = LetterPadContainer;
