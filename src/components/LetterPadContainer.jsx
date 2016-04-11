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

    onClick(letter) {
        if (this.props.onClick instanceof Function) {
            this.props.onClick(letter);
        }
    },

    render() {
        let letters = this.props.letters || [];
        let selected = this.props.selected || null;
        return <div style={this.getStyles()}>
            {letters.map((letter) => {
                return (
                <LetterPad key={letter} letter={letter} selected={ selected === letter } onClick={this.onClick.bind(this,letter)} />
                );
            })}

        </div>;
    }
});

module.exports = LetterPadContainer;
