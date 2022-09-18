import React, { Component } from 'react';
import HabitAddForm from './habitAddForm';
import Habit from './habit';

class Habits extends Component {

  render() {
    return (
      <>
        <HabitAddForm onAdd={this.props.onAdd}/>
        <ul className="habits">
          {this.props.habits.map((habit) => (
            <Habit //
              key={habit.id}
              habit={habit}
              onIncrement={this.props.onIncrement}
              onDecrement={this.props.onDecrement}
              onDelete={this.props.onDelete}
            />
          ))}
        </ul>
        <button className="button reset-button" onClick={this.props.onReset}>Reset All</button>
      </>
    );
  }
}

export default Habits;
