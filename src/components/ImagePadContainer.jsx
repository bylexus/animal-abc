var React = require('react');
var ImagePad = require('./ImagePad.jsx');

let ImagePadContainer = React.createClass({
    getStyles() {
        return {
            display: 'inline-flex',
            justifyContent: 'center',
            flexWrap: 'wrap'
        };
    },

    onClick(name,conf) {
        if (this.props.onClick instanceof Function) {
            this.props.onClick(name,conf);
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
                    onClick={this.onClick.bind(this,imageConf.name,imageConf)}
                    discovered={discovered.indexOf(imageConf.name,imageConf) > -1}
                    selected={selected === imageConf.name}
                    fontSize={imageConf.fontSize || null} />
                );
            })}
        </div>;
    }
});

module.exports = ImagePadContainer;
