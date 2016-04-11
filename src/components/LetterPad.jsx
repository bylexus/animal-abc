var React = require('react');

let LetterPad = React.createClass({
    componentDidMount() {
        window.requestAnimationFrame(() => {
            this.refs.cmp.style.opacity = 1;
        });
    },

    getStyles() {
        return {
            width: '10vw',
            height: '10vw',
            border: '2px solid black',
            borderRadius: '100%',
            backgroundColor: this.props.selected ? 'green' : 'white',
            color: this.props.selected ? 'white' : 'black',
            fontSize: this.props.letter.length > 1 ? '4vw' : '8vw',
            textDecoration: 'none',
            display: 'inline-block',
            lineHeight: '10vw',
            textAlign: 'center',
            verticalAlign: 'middle',
            opacity: 0,
            transition: 'background-color 0.25s, color 0.25s, opacity 0.5s',
            boxShadow: '0px 0px 5px rgba(0,0,0,0.3)',
            textShadow: '1px 1px 3px rgba(0,0,0,0.3)'
        };
    },

    onClick(letter, e) {
        e.preventDefault();
        if (this.props.onClick instanceof Function) {
            this.props.onClick(letter);
        }
    },

    render() {
        return <a ref="cmp" href="#" style={this.getStyles()} onClick={this.onClick.bind(this,this.props.letter)}>
            {this.props.letter}
        </a>;
    }
});

module.exports = LetterPad;
