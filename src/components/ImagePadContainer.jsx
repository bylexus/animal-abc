var React = require('react');
var ImagePad = require('./ImagePad.jsx');
var classnames = require('classnames');

let ImagePadContainer = React.createClass({
    propTypes: {
        onClick: React.PropTypes.func,
        images: React.PropTypes.array,
        discoveredImages: React.PropTypes.array,
        selectedImage: React.PropTypes.string,
        className: React.PropTypes.string
    },

    getStyles() {
        return {
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

        return <div className={classnames(this.props.className,'image-pad-container')}>
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
