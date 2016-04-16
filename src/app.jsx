var React = require('react');
var ReactDOM = require('react-dom');
var GameBoard = require('./components/GameBoard.jsx');
var EventMgr = require('./EventMgr.js');

var App = React.createClass({
    getInitialState() {
        return {
            reset: false
        }
    },

    doReset(e) {
        e.preventDefault();
        EventMgr.fireEvent('reset');
    },

    render() {
        return ( 
            <div>
                <div style={{display: 'flex', alignItems: 'center', marginBottom: '10px'}}>
                    <h1 style={{ flexGrow: 1}} className="title">Animal ABC! <span>Suche die Anfangsbuchstaben der Tiere!</span></h1>
                    <a href="#" title="Nochmal!" style={{
                        width: '30px',
                        height: '30px',
                        fontSize: '20px',
                        textDecoration: 'none',
                        color: 'white',
                        backgroundColor: '#080',
                        textAlign: 'center',
                        lineHeight: '30px',
                        verticalAlign: 'middle',
                        border: '1px solid black',
                        padding: '0.2em',
                        borderRadius: '100%'
                    }} onClick={this.doReset}>↺</a>
                    </div>
                <GameBoard /> 
            </div>
        );
    }
});

ReactDOM.render(
  <App />,
  document.getElementById('main')
);

