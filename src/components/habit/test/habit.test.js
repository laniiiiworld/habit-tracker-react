import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderer from 'react-test-renderer';
import Habit from '../habit';

describe('Habit Component', () => {
  const habit = { id: 1, name: 'Testing', count: 4 };
  let HabitComponent;
  let onIncrement;
  let onDecrement;
  let onDelete;

  beforeEach(() => {
    onIncrement = jest.fn();
    onDecrement = jest.fn();
    onDelete = jest.fn();
    HabitComponent = (
      <Habit //
        habit={habit}
        onIncrement={onIncrement}
        onDecrement={onDecrement}
        onDelete={onDelete}
      />
    );
  });

  it('renders', () => {
    const component = renderer.create(HabitComponent);
    expect(component.toJSON()).toMatchSnapshot();
  });

  describe('Button click', () => {
    beforeEach(() => {
      render(HabitComponent);
    });

    it('calls onIncrement when clicking the "increment" button', () => {
      const button = screen.getByTitle('increment');
      userEvent.click(button);
      expect(onIncrement).toHaveBeenCalledWith(habit);
    });

    it('calls onDecrement when clicking the "decrement" button', () => {
      const button = screen.getByTitle('decrement');
      userEvent.click(button);
      expect(onDecrement).toHaveBeenCalledWith(habit);
    });

    it('calls onDelete when clicking the "delete" button', () => {
      const button = screen.getByTitle('delete');
      userEvent.click(button);
      expect(onDelete).toHaveBeenCalledWith(habit);
    });
  });
});
