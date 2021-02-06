import React from 'react';
import styles from './miniGame.less';
import { Button, message } from 'antd';

function Square(props) {
  // clickHandler = () => {
  //   this.props.onClick();
  // };
  return (
    <div className={styles.square} onClick={props.onClick}>
      {props.name}
    </div>
  );
}
// 判断输赢
function whoWin(list) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (list[a] && list[a] === list[b] && list[a] === list[c]) {
      return list[a];
    }
  }
  return null;
}

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      xIsNext: true,
      history: [],
    };
  }
  handleClick(i) {
    const squares = Object.assign({}, this.state.squares); //拷贝一个副本
    console.log(this.state.history, '-=-=-=-=-=-');
    if (squares[i] || whoWin(squares)) {
      return;
    } else {
      this.state.history.push({ list: squares });
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    // squares[i] = 'X';
    this.setState({ squares: squares, xIsNext: !this.state.xIsNext }, () => {
      if (whoWin(squares)) {
        message.success('赢的一方是：' + whoWin(squares));
      }
    });
  }
  // 重置函数
  again() {
    this.setState({
      squares: Array(9).fill(null),
      xIsNext: true,
      history: [],
    });
  }
  // 悔棋
  back() {
    if (this.state.history.length > 2) {
      this.setState({
        squares: this.state.history[this.state.history.length - 2].list,
        xIsNext: !this.state.xIsNext,
      });
      this.state.history.splice(this.state.history.length - 1, 1);
    }
  }
  renderSquare(i) {
    return <Square name={this.state.squares[i]} onClick={() => this.handleClick(i)} />;
  }
  render() {
    const winner = whoWin(this.state.squares);
    let status;
    if (winner) {
      status = '赢得一方是: ' + winner;
    } else {
      status = '接下来是:' + (this.state.xIsNext ? 'X' : 'O');
    }
    return (
      <div className={styles.container}>
        <div className={styles.title}>"#"棋小游戏</div>
        <div>{status}</div>
        <div className={styles.row}>
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className={styles.row}>
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className={styles.row}>
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
        <div className={styles.btns}>
          <Button onClick={() => this.again()}>重置</Button>
          <Button onClick={() => this.back()}>悔棋</Button>
        </div>
      </div>
    );
  }
}

export default Board;
