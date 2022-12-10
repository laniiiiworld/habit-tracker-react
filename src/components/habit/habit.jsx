import React, { PureComponent } from 'react';

class Habit extends PureComponent {
  render() {
    const habit = this.props.habit;
    const { name, count } = habit;
    return (
      <li className='habit'>
        <span className='habit-name align-left' data-testid='habit-name'>
          {name}
        </span>
        <span className='align-right'>
          <span className='count habit-count' data-testid='habit-count'>
            {count}
          </span>
          <button className='habit-button habit-increase' title='increment' onClick={() => this.props.onIncrement(habit)}>
            <i className='fa-solid fa-square-plus'></i>
          </button>
          <button className='habit-button habit-decrease' title='decrement' onClick={() => this.props.onDecrement(habit)}>
            <i className='fa-solid fa-square-minus'></i>
          </button>
          <button className='habit-button habit-delete' title='delete' onClick={() => this.props.onDelete(habit)}>
            <i className='fa-solid fa-trash-can'></i>
          </button>
        </span>
      </li>
    );
  }
}

export default Habit;
