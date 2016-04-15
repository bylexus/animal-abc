var React = require('react');

let ImagePad = React.createClass({
    propTypes: {
        discovered: React.PropTypes.bool,
        onClick: React.PropTypes.func,
        imageUrl: React.PropTypes.string,
        selected: React.PropTypes.bool,
        name: React.PropTypes.string,
        fontSize: React.PropTypes.string
    },

    componentDidMount() {
        window.requestAnimationFrame(() => {
            this.refs.cmp.style.opacity = 1;
        });
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
        <a ref="cmp" href="#" style={{
                width: '15vw',
                height: '15vw',
                maxWidth: '200px',
                maxHeight: '200px',
                border: discovered ? '3px solid #11ff11' : (selected ? '3px solid #1111ff' : '3px solid rgba(0,0,0,0.3)'),
                boxShadow: discovered ? '0px 0px 5px #11ff11,0px 0px 5px #11ff11' : (selected ? '0px 0px 5px #11f,0px 0px 5px #11f': '0px 0px 5px rgba(0,0,0,0.3)'),
                margin: '3px',
                borderRadius: '5%',
                display: 'inline-flex',
                flexDirection: 'column',
                opacity: 0,
                transition: 'background-color 0.25s, color 0.25s, opacity 0.5s',
                backgroundImage: `url(${imageUrl})`,
                backgroundSize: 'cover',
                textDecoration: 'none',
                cursor: discovered ? 'default' : 'pointer'
            }}
                onClick={this.onClick.bind(this,this.props.name)}>
            <div style={{
                width: '100%',
                flexGrow: 1
            }}></div>

            <div style={{
                backgroundColor: 'rgba(255,255,255,0.6)',
                padding: '0.1em',
                color: 'black',
                fontFamily: 'sans-serif',
                fontSize: this.props.fontSize || '3vw',
                textAlign: 'center',
                visibility: discovered ? 'visible' : 'hidden'
            }}>{this.props.name}</div>


        </a>
        );
    }
});

module.exports = ImagePad;
