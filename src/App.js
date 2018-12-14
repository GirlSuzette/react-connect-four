import React, { Component } from 'react';
import Row from './Components/Row'
import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      board: []
    };
  }

  initBoard() {

    let board = [];
    for (let r = 0; r < 6; r++) {
      let row = [];
      for (let c = 0; c < 7; c++) { row.push(null) }
      board.push(row);
    }

    this.setState({
      board
    });
  }


  checkDraw(board) {
    for (let r = 0; r < 6; r++) {
      for (let c = 0; c < 7; c++) {
        if (board[r][c] === null) {
          return null;
        }
      }
    }
    return 'draw';
  }

  componentWillMount() {
    this.initBoard();
  }

  render() {
    return (
      <div>
        <div className="button">New Game</div>
        <table>
          <thead>
          </thead>
          <tbody>
            {this.state.board.map((row, i) => (<Row key={i} row={row} play={this.play} />))}
          </tbody>
        </table>
      </div>
    );
  }
}




