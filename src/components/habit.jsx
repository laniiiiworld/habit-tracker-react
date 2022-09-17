import React, { Component } from 'react';

class Habit extends Component {
  render() {
    const habit = this.props.habit;
    const { name, count } = habit;
    return (
      <li className='habit'>
        <span className='habit-name'>{name}</span>
        <span className='count habit-count'>{count}</span>
        <button className='habit-button habit-increase' onClick={(event) => this.props.onIncrement(habit)}>
          <i className='fa-solid fa-square-plus'></i>
        </button>
        <button className='habit-button habit-decrease' onClick={(event) => this.props.onDecrement(habit)}>
          <i className='fa-solid fa-square-minus'></i>
        </button>
        <button className='habit-button habit-delete' onClick={(event) => this.props.onDelete(habit)}>
          <i className='fa-solid fa-trash-can'></i>
        </button>
      </li>
    );
  }
}

export default Habit;
