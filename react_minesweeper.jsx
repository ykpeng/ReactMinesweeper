const React = require('react');
const ReactDOM = require('react-dom');
const Game = require('./game');
const Tile = require('./tile.jsx');

const Minesweeper = React.createClass({
  render() {
    return(
      <Game />
    );
  }
});

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(<Minesweeper />, document.getElementById('main'));
});
