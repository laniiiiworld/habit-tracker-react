import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderer from 'react-test-renderer';
import HabitAddForm from '../habitAddForm';

describe('HabitAddForm', () => {
  it('renders', () => {
    const component = renderer.create(<HabitAddForm onAdd={jest.fn()} />);

    expect(component.toJSON()).toMatchSnapshot();
  });

  describe('Form Submit', () => {
    let onAdd;
    let input;
    let button;

    beforeEach(() => {
      onAdd = jest.fn();

      render(<HabitAddForm onAdd={onAdd} />);
      input = screen.getByPlaceholderText('Habit');
      button = screen.getByText('Add');
    });

    it('calls onAdd when button is clicked and vaild habit is entered', () => {
      userEvent.type(input, 'New Habit');
      userEvent.click(button);

      expect(onAdd).toHaveBeenCalledWith('New Habit');
    });

    it('does not calls onAdd when the habit is empty', () => {
      userEvent.clear(input);
      userEvent.click(button);

      expect(onAdd).toHaveBeenCalledTimes(0);
    });
  });
});
