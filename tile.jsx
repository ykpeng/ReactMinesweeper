const React = require('react');
const Minesweeper = require('./minesweeper');

const Tile = React.createClass({
  getInitialState: function(){
    return { bombed: this.props.obj.bombed,
             explored: this.props.obj.explored,
             flagged: this.props.obj.flagged };
  },
  handleClick: function (e) {
    this.props.updateGame(this.props.obj, e.altKey);
    this.setState({ bombed: this.props.obj.bombed,
             explored: this.props.obj.explored,
             flagged: this.props.obj.flagged });
  },
  render() {
    let content = "";
    let style = "";
    if (this.state.bombed && this.state.explored) {
      style = "bombed";
      content = "💣";
    } else if (this.state.explored) {
      style = "explored";
      content = this.props.obj.adjacentBombCount() === 0 ?
                "" : this.props.obj.adjacentBombCount();
    } else if (this.state.flagged) {
      style = "flagged";
      content = "⚑";
    }
    return (
      <div className={"tile "+ style} onClick={this.handleClick}>{content}</div>
    );
  }
});

module.exports = Tile;
