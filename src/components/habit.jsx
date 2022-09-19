import React, { PureComponent } from 'react';

class Habit extends PureComponent {
  render() {
    const habit = this.props.habit;
    const { name, count } = habit;
    return (
      <li className='habit'>
        <span className='habit-name align-left'>{name}</span>
        <span className='align-right'>
          <span className='count habit-count'>{count}</span>
          <button className='habit-button habit-increase' onClick={() => this.props.onIncrement(habit)}>
            <i className='fa-solid fa-square-plus'></i>
          </button>
          <button className='habit-button habit-decrease' onClick={() => this.props.onDecrement(habit)}>
            <i className='fa-solid fa-square-minus'></i>
          </button>
          <button className='habit-button habit-delete' onClick={() => this.props.onDelete(habit)}>
            <i className='fa-solid fa-trash-can'></i>
          </button>
        </span>
      </li>
    );
  }
}

export default Habit;
