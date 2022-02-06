import React, { Component } from "react";
import "./app.css";
import HabitAddForm from "./components/habitAddForm";
import Habits from "./components/habits";
import Navbar from "./components/navbar";

class App extends Component {
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

  /*
  handleIncrement = (habit) => {
    const habits = [...this.state.habits]; // habits 배열 자체를 복사 => 배열 내부의 오브젝트 참조값을 그대로 가져옴
    const index = habits.indexOf(habit);   
    habits[index].count++;                 
    this.setState({ habit });
  };
  */

  // habit.count = 0;
  // habit 오브젝트의 참조값은 변하지 않기 때문에 이렇게 수정하면 리렌더링 되지 않음

  // 04. 자식 컴포넌트에서 전달한 인자와 함께 함수 호출
  handleIncrement = (habit) => {
    const habits = this.state.habits.map((item) => {
      if (item.id === habit.id) {
        // habits 배열 내부의 오브젝트를 새로운 오브젝트로 만들고 내용만 복사 => 참조값 다름 (리렌더링 O)
        return { ...habit, count: habit.count + 1 };
      }
      // habits 배열 내부의 오브젝트를 그대로 리턴 => 참조값 같음 (리렌더링 X)
      return item;
    });
    this.setState({ habits });
  };

  handleDecrement = (habit) => {
    const habits = this.state.habits.map((item) => {
      if (item.id === habit.id) {
        const count = habit.count - 1;
        return { ...habit, count: count < 0 ? 0 : count };
      }
      return item;
    });
    this.setState({ habits });
  };

  handleDelete = (habit) => {
    // 조건에 맞는 배열 아이템들로 새로운 배열 생성
    const habits = this.state.habits.filter((item) => item.id !== habit.id);
    this.setState({ habits: habits });
  };

  handleAdd = (name) => {
    const habits = [...this.state.habits, { id: Date.now(), name, count: 0 }];
    this.setState({ habits });
  };

  handleReset = () => {
    const habits = this.state.habits.map((habit) => {
      if (habit.count > 0) {
        return { ...habit, count: 0 };
      }
      return habit;
    });
    this.setState({ habits });
  };

  // 01. Habits 컴포넌트에 prop 으로 멤버함수를 전달
  render() {
    return (
      <>
        <Navbar
          totalCount={this.state.habits.filter((item) => item.count > 0).length}
        />
        <Habits
          habits={this.state.habits}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          onDelete={this.handleDelete}
          onAdd={this.handleAdd}
          onReset={this.handleReset}
        />
      </>
    );
  }
}

export default App;
