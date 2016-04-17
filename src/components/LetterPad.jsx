var React = require('react');
var classnames = require('classnames');

let LetterPad = React.createClass({
    propTypes: {
        selected: React.PropTypes.bool,
        letter: React.PropTypes.string,
        className: React.PropTypes.string,
        onClick: React.PropTypes.func
    },
    
    getInitialState() {
        return {
            selected: false
        };
    },
    componentDidMount() {
        window.requestAnimationFrame(() => {
            this.refs.cmp.style.opacity = 1;
        });
    },

    getStyles() {
        return {
            backgroundColor: this.props.selected || this.state.selected ? '#22f' : 'white',
            color: this.props.selected || this.state.selected ? 'white' : 'black',
            fontSize: this.props.letter.length > 1 ? '2vw' : '4vw'
        };
    },

    onClick(letter, e) {
        e.preventDefault();
        if (this.props.onClick instanceof Function) {
            this.props.onClick(letter);
        }
    },

    render() {
        return <a ref="cmp" 
                className={classnames(this.props.className,'letter-pad')}
                href="#"
                style={this.getStyles()} 
                onClick={this.onClick.bind(this,this.props.letter)}
                onMouseDown={() => { this.setState({selected: true})}}
                onMouseUp={() => { this.setState({selected: false})}}>
            {this.props.letter}
        </a>;
    }
});

module.exports = LetterPad;
