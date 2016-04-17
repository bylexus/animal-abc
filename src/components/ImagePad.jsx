var React = require('react');
var ReactCSSTransitionGroup = require('react-addons-css-transition-group');
var classnames = require('classnames');

let ImagePad = React.createClass({
    propTypes: {
        discovered: React.PropTypes.bool,
        onClick: React.PropTypes.func,
        imageUrl: React.PropTypes.string,
        selected: React.PropTypes.bool,
        name: React.PropTypes.string,
        className: React.PropTypes.string,
        fontSize: React.PropTypes.string
    },

    onClick(name, e) {
        e.preventDefault();
        if (this.props.discovered) return;
        if (this.props.onClick instanceof Function) {
            this.props.onClick(name);
        }
    },

    render() {
        let imageUrl = this.props.imageUrl;
        let discovered = this.props.discovered === true;
        let selected = this.props.selected === true;

        return (
            <ReactCSSTransitionGroup 
                transitionName="image-pad"
                transitionAppear={true}
                transitionAppearTimeout={500}
                transitionEnterTimeout={500}
                transitionLeaveTimeout={0}>
        <a ref="cmp" className={classnames(this.props.className,'image-pad')} href="#" style={{
                border: discovered ? '3px solid #11ff11' : (selected ? '3px solid #1111ff' : '3px solid rgba(0,0,0,0.3)'),
                boxShadow: discovered ? '0px 0px 5px #11ff11,0px 0px 5px #11ff11' : (selected ? '0px 0px 5px #11f,0px 0px 5px #11f': '0px 0px 5px rgba(0,0,0,0.3)'),
                backgroundImage: `url(${imageUrl})`,
                cursor: discovered ? 'default' : 'pointer'
            }}
                onClick={this.onClick.bind(this,this.props.name)}>

            <div className="text-label" style={{
                fontSize: this.props.fontSize || '3vw',
                visibility: discovered ? 'visible' : 'hidden'
            }}>{this.props.name}</div>
        </a>
        </ReactCSSTransitionGroup>
        );
    }
});

module.exports = ImagePad;
