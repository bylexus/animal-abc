var React = require('react');

let LetterPad = React.createClass({
    getStyles() {
        return {
            width: '100px',
            height: '100px',
            border: '2px solid black',
            borderRadius: '100%',
            backgroundColor: this.props.selected ? 'green' : 'white',
            color: this.props.selected ? 'white' : 'black',
            fontSize: this.props.letter.length > 1 ? '50px' : '80px',
            textDecoration: 'none',
            display: 'inline-block',
            lineHeight: '100px',
            textAlign: 'center',
            verticalAlign: 'middle',
            transition: 'background-color 0.25s, color 0.25s',
            boxShadow: '0px 0px 5px rgba(0,0,0,0.3)'
        };
    },

    onClick(letter, e) {
        e.preventDefault();
        if (this.props.onClick instanceof Function) {
            this.props.onClick(letter);
        }
    },

    render() {
        return <a href="#" style={this.getStyles()} onClick={this.onClick.bind(this,this.props.letter)}>
            {this.props.letter}
        </a>;
    }
});

module.exports = LetterPad;
