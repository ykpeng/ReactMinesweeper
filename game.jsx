const React = require('react');
const Minesweeper = require('./minesweeper');
const Board = require('./board');

const Game = React.createClass({
  getInitialState: function(){
    return { board: new Minesweeper.Board(10, 20)};
  },
  updateGame: function (tile, flagged) {
    if (flagged) {
      tile.toggleFlag();
    } else {
      tile.explore();
    }
    this.setState({ board: this.state.board });
  },
  restartGame: function(){
    this.setState({ board: new Minesweeper.Board(10, 20)});
  },
  render() {
    let modal = "";
    if (this.state.board.won()) {
      modal = <section id="modal" class="modal is-active">
        <article class="modal-content">
          <span class="modal-close js-hide-modal">&times;</span>

          <h1>You Win!</h1>

          <button onClick={this.restartGame}>Play again</button>
        </article>
        <div class="modal-screen js-hide-modal"></div>
      </section>;
    } else if (this.state.board.lost()) {
      modal = <section id="modal" class="modal is-active">
        <article class="modal-content">
          <span class="modal-close js-hide-modal">&times;</span>

          <h1>You Lose!</h1>

          <button onClick={this.restartGame}>Play again</button>
        </article>
        <div class="modal-screen js-hide-modal"></div>
      </section>;
    }
    return (
      <figure>
        <Board board={this.state.board} updateGame={this.updateGame}/>
        <section>{modal}</section>
      </figure>
    );
  }
});

module.exports = Game;
