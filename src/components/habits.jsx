import React, { Component } from "react";
import Habit from "./habit";

class Habits extends Component {
  state = {
    habits: [
      {
        id: 1,
        name: "Reading",
        count: 0,
      },
      {
        id: 2,
        name: "Runnimg",
        count: 0,
      },
      {
        id: 3,
        name: "Coding",
        count: 0,
      },
    ],
  };

  // 04. 자식 컴포넌트에서 전달한 인자와 함께 함수 호출
  handleIncrement = (habit) => {
    // 기존 habits 배열 복사
    const habits = [...this.state.habits];
    // 새로 복사한 배열에서 인자와 동일한 값을 가진 배열의 인덱스 찾기
    const index = habits.indexOf(habit);
    // 새로 복사한 배열의 값 증가
    habits[index].count++;
    // 기존 habits 의 state 를 새로 복사한 배열로 업데이트
    this.setState({ habits: habits });
  };

  handleDecrement = (habit) => {
    const habits = [...this.state.habits];
    const index = habits.indexOf(habit);
    const count = habits[index].count - 1;
    habits[index].count = count < 0 ? 0 : count; // 구린내나는 코드
    this.setState({ habits: habits });
  };

  handleDelete = (habit) => {
    // 조건에 맞지 않는 배열 아이템들로 새로운 배열 생성
    const habits = this.state.habits.filter((item) => item.id !== habit.id);
    this.setState({ habits: habits });
  };

  // 01. 자식 컴포넌트에 prop 으로 멤버함수를 전달
  render() {
    return (
      <ul>
        {this.state.habits.map((habit) => (
          <Habit
            key={habit.id}
            habit={habit}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onDelete={this.handleDelete}
          />
        ))}
      </ul>
    );
  }
}

export default Habits;
