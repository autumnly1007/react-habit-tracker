import React, { Component } from "react";

class Habit extends Component {
  // 03. 함수 호출 시 부모 컴포넌트에서 전달받은 함수 호출 (전달받은 prop 를 인자로 보냄)
  handleIncrement = () => {
    this.props.onIncrement(this.props.habit);
  };
  handleDecrement = () => {
    this.props.onDecrement(this.props.habit);
  };
  handleDelete = () => {
    this.props.onDelete(this.props.habit);
  };

  // 아래 버튼 코드와 동일하지만 코드가 너무 길어지기 때문에 함수로 따로 뺀 것
  /* <button className="habit-button habit-delete"
        nClick={() => this.props.onDelete(this.props.habit)}>
        <i className="fas fa-trash"></i>
    </button> */

  // 02. 버튼 클릭 시 현재 클래스의 함수 호출
  render() {
    const { name, count } = this.props.habit;
    return (
      <li className="habit">
        <span className="habit-name">{name}</span>
        <span className="habit-count">{count}</span>
        <button
          className="habit-button habit-increase"
          onClick={this.handleIncrement}
        >
          <i className="fas fa-plus-square"></i>
        </button>
        <button
          className="habit-button habit-decrease"
          onClick={this.handleDecrement}
        >
          <i className="fas fa-minus-square"></i>
        </button>
        <button
          className="habit-button habit-delete"
          onClick={this.handleDelete}
        >
          <i className="fas fa-trash"></i>
        </button>
      </li>
    );
  }
}

export default Habit;
