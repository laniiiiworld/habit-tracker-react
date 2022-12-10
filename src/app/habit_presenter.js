export default class HabitPresenter {
  constructor(habits, maxHabits) {
    this.habits = habits;
    this.maxHabits = maxHabits;
  }

  getHabits() {
    return this.habits;
  }

  getTotalCount() {
    return this.habits.reduce((sum, habit) => {
      if (habit.count > 0) sum += 1;
      return sum;
    }, 0);
  }

  add(name) {
    if (this.habits.length === this.maxHabits) {
      throw new Error(`Number of habits cannot be more then ${this.maxHabits}`);
    }
    this.habits = [...this.habits, { id: Date.now(), name, count: 0 }];
    return this.habits;
  }

  increment(id) {
    this.habits = this.habits.map((item) => {
      if (item.id === id) {
        return { ...item, count: item.count + 1 };
      }
      return item;
    });
    return this.habits;
  }

  decrement(id) {
    this.habits = this.habits.map((item) => {
      if (item.id === id) {
        const count = item.count - 1;
        return { ...item, count: count < 0 ? 0 : count };
      }
      return item;
    });
    return this.habits;
  }

  delete(id) {
    this.habits = this.habits.filter((item) => item.id !== id);
    return this.habits;
  }

  reset() {
    this.habits = this.habits.map((item) => {
      if (item.count === 0) {
        return item;
      }
      return { ...item, count: 0 };
    });
    return this.habits;
  }
}
