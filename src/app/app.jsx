import React, { Component } from 'react';
import './app.css';
import Navbar from '../components/navbar/navbar';
import Habits from '../components/habits/habits';

class App extends Component {
  state = {
    habits: this.props.presenter.getHabits(),
  };

  getTotalCount = () => {
    return this.props.presenter.getTotalCount();
  };

  handleAdd = (name) => {
    const habits = this.props.presenter.add(name);
    this.setState({ habits });
  };

  handleIncrement = (habit) => {
    const habits = this.props.presenter.increment(habit.id);
    this.setState({ habits });
  };

  handleDecrement = (habit) => {
    const habits = this.props.presenter.decrement(habit.id);
    this.setState({ habits });
  };

  handleDelete = (habit) => {
    const habits = this.props.presenter.delete(habit.id);
    this.setState({ habits });
  };

  handelReset = () => {
    const habits = this.props.presenter.reset();
    this.setState({ habits });
  };

  render() {
    return (
      <>
        <Navbar totalCount={this.getTotalCount()} />
        <Habits habits={this.state.habits} onAdd={this.handleAdd} onIncrement={this.handleIncrement} onDecrement={this.handleDecrement} onDelete={this.handleDelete} onReset={this.handelReset} />
      </>
    );
  }
}

export default App;
