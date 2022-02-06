import React, { Component } from "react";
import Habit from "./habit";
import HabitAddForm from "./habitAddForm";

// PureComponent 를 굳이 상속하지 않는 이유
// => 새로운 habits 의 오브젝트를 만들어서 업데이트 하기 때문에 PureComponent 를 상속해도 동일함
class Habits extends Component {
  // 02. Habit 컴포넌트에 prop 으로
  // App 컴포넌트에서 받은 prop 전달
  render() {
    return (
      <>
        <HabitAddForm onAdd={this.props.onAdd} />
        <ul>
          {this.props.habits.map((habit) => (
            <Habit
              key={habit.id}
              habit={habit}
              onIncrement={this.props.onIncrement}
              onDecrement={this.props.onDecrement}
              onDelete={this.props.onDelete}
            />
          ))}
        </ul>
        <button className="habits-reset" onClick={this.props.onReset}>
          Reset All
        </button>
      </>
    );
  }
}

export default Habits;
