var React = require('react');
var ImagePad = require('./ImagePad.jsx');

let ImagePadContainer = React.createClass({
    getStyles() {
        return {
            padding: '1em',
            backgroundColor: '#eee',
            border: '1px solid #888'
        };
    },

    onClick(name) {
        if (this.props.onClick instanceof Function) {
            this.props.onClick(name);
        }
    },

    render() {
        let images = this.props.images || [];
        let discovered = this.props.discoveredImages || [];
        let selected = this.props.selectedImage || null;

        return <div style={this.getStyles()}>
            {images.map((imageConf) => {
                return (
                <ImagePad key={imageConf.name}
                    name={imageConf.name}
                    imageUrl={imageConf.imageUrl}
                    onClick={this.onClick.bind(this,imageConf.name)}
                    discovered={discovered.indexOf(imageConf.name) > -1}
                    selected={selected === imageConf.name}/>
                );
            })}
        </div>;
    }
});

module.exports = ImagePadContainer;
