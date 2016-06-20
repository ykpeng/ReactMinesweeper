const React = require('react');
const ReactDOM = require('react-dom');

const Minesweeper = React.createClass({
  render() {
    return(
      <div>Hello World</div>
    );
  }
});

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(<Minesweeper />, document.getElementById('main'));
});
