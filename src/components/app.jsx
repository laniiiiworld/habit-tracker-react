import React, { Component } from 'react';
import '../app.css';
import Navbar from './navbar';
import Habits from './habits';

class App extends Component {
  state = {
    habits: [],
  };

  getTotalCount = ()=>{
    const count = this.state.habits.reduce((sum,habit)=>{
                      if(habit.count > 0) sum += 1; 
                      return sum;
                    }, 0);
    return count;
  };

  handleAdd = (name)=>{
    const habits = [...this.state.habits, {id: Date.now(), name, count:0}];
    this.setState({ habits });
  };

  handleIncrement = (habit) => {
    const habits = [...this.state.habits];
    const index = habits.indexOf(habit);
    habits[index].count++;
    this.setState({ habits });
  };

  handleDecrement = (habit) => {
    const habits = [...this.state.habits];
    const index = habits.indexOf(habit);
    const count = habits[index].count - 1;
    habits[index].count = count < 0 ? 0 : count;
    this.setState({ habits });
  };

  handleDelete = (habit) => {
    const habits = this.state.habits.filter((item) => item.id != habit.id);
    this.setState({ habits });
  };

  handelReset = ()=>{
    const habits = this.state.habits.map(habit=>{
                      habit.count = 0;
                      return habit;
                    });
    this.setState({habits});
  };

  render() {
    return (
      <>
        <Navbar totalCount={this.getTotalCount()} />
        <Habits
          habits={this.state.habits}
          onAdd={this.handleAdd}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          onDelete={this.handleDelete}
          onReset={this.handelReset}
         />
      </>);
  }
}

export default App;