import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderer from 'react-test-renderer';
import Habits from '../habits';

describe('Habits Component', () => {
  const habits = [
    { id: 1, name: 'Reading', count: 2 },
    { id: 2, name: 'Running', count: 0 },
  ];
  let HabitsComponent;
  let onAdd;
  let onIncrement;
  let onDecrement;
  let onDelete;
  let onReset;

  beforeEach(() => {
    onAdd = jest.fn();
    onIncrement = jest.fn();
    onDecrement = jest.fn();
    onDelete = jest.fn();
    onReset = jest.fn();
    HabitsComponent = (
      <Habits //
        habits={habits}
        onAdd={onAdd}
        onIncrement={onIncrement}
        onDecrement={onDecrement}
        onDelete={onDelete}
        onReset={onReset}
      />
    );
  });

  it('renders', () => {
    const component = renderer.create(HabitsComponent);
    expect(component.toJSON()).toMatchSnapshot();
  });

  describe('Button click', () => {
    beforeEach(() => {
      render(HabitsComponent);
    });

    it('calls onAdd when clicking the "add" button', () => {
      const input = screen.getByPlaceholderText('Habit');
      const button = screen.getByText('Add');
      const newHabit = 'New Habit';
      userEvent.type(input, newHabit);
      userEvent.click(button);
      expect(onAdd).toHaveBeenCalledWith(newHabit);
    });

    it('calls onIncrement when clicking the "increment" button', () => {
      const button = screen.getAllByTitle('increment')[0];
      userEvent.click(button);
      expect(onIncrement).toHaveBeenCalledWith(habits[0]);
    });

    it('calls onDecrement when clicking the "decrement" button', () => {
      const button = screen.getAllByTitle('decrement')[0];
      userEvent.click(button);
      expect(onDecrement).toHaveBeenCalledWith(habits[0]);
    });

    it('calls onDelete when clicking the "delete" button', () => {
      const button = screen.getAllByTitle('delete')[0];
      userEvent.click(button);
      expect(onDelete).toHaveBeenCalledWith(habits[0]);
    });

    it('calls onReset when clicking the "Reset All" button', () => {
      const button = screen.getByText('Reset All');
      userEvent.click(button);
      expect(onReset).toHaveBeenCalledTimes(1);
    });
  });
});
