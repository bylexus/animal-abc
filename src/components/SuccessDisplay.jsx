let React = require('react');
let AudioPlayer = require('../AudioPlayer.js');
let Preloader = require('../Preloader.js');

let imgPromise = Preloader.getImagePromise('resources/lucky-smiley.png');

let SuccessDisplay = React.createClass({
    propTypes: {
        onDone: React.PropTypes.func
    },

    componentDidMount() {
        AudioPlayer.play('success');
    },

    clicked() {
        if (this.props.onDone instanceof Function) {
            this.props.onDone();
        }
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
            backgroundColor: '#0a0',
            opacity: 0.9,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }} onClick={this.clicked}>
            <img src="resources/lucky-smiley.png" style={{maxWidth: '60%', maxHeight: '60%'}} />
        </div>
        );
    }
});

SuccessDisplay.imgPromise = imgPromise;
module.exports = SuccessDisplay;
