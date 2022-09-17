import React, { Component } from 'react';
import Habit from './habit';

class Habits extends Component {

  render() {
    return (
      <ul>
        {this.props.habits.map((habit) => (
          <Habit //
            key={habit.id}
            habit={habit}
            onIncrement={(event) => this.props.onIncrement(habit)}
            onDecrement={(event) => this.props.onDecrement(habit)}
            onDelete={(event) => this.props.onDelete(habit)}
          />
        ))}
      </ul>
    );
  }
}

export default Habits;
