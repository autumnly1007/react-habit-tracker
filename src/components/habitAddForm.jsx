import React, { PureComponent } from "react";

/**
 * PureComponent
 * 렌더링 전과 후의 state 와 props 를 얕게 비교함
 * state, props 가 변경되지 않으면 리렌더링되지 않음
 */
class HabitAddForm extends PureComponent {
  formRef = React.createRef();
  inputRef = React.createRef();
  onSubmit = (event) => {
    event.preventDefault();
    const name = this.inputRef.current.value;
    name && this.props.onAdd(name);
    // input 초기화 또는 form 리셋
    // this.inputRef.current.value = "";
    this.formRef.current.reset();
  };
  render() {
    return (
      <form ref={this.formRef} className="add-form" onSubmit={this.onSubmit}>
        <input
          ref={this.inputRef}
          type="text"
          className="add-input"
          placeholder="Habit"
        />
        <button className="add-button">Add</button>
      </form>
    );
  }
}

export default HabitAddForm;
