const React = require('react');
const Minesweeper = require('./minesweeper');
const Tile = require('./tile');

const Board = React.createClass({
  render() {
    const grid = this.props.board.grid.map((row, idx) => {
      return (<div key={idx} className="row">
        {
          row.map((col, idx2) => {
            return <Tile obj={col}
                    updateGame={this.props.updateGame}
                    key={idx2}/>;
          })
        }
      </div>);
    });

    return(
      <div>{grid}</div>
    );
  }
});

module.exports = Board;
