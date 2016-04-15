let React = require('react');
let AudioPlayer = require('../AudioPlayer.js');

let WrongDisplay = React.createClass({
    propTypes: {
        onDone: React.PropTypes.func,
        delay: React.PropTypes.number
    },


    componentDidMount() {
        let delay = this.props.delay || 1000;

        AudioPlayer.play('resources/honk.mp3');

        setTimeout(() => {
            if (this.props.onDone instanceof Function) {
                this.props.onDone();
            }
        },delay);
    },

    render() {
        return (
        <div ref="cmp" style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            margin: 'auto',
            backgroundColor: '#a00',
            opacity: 0.9,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <img src="resources/sad-smiley.png" style={{maxWidth: '60%', maxHeight: '60%'}} />
        </div>
        );
    }
});

module.exports = WrongDisplay;
