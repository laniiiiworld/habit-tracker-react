import HabitPresenter from '../habit_presenter';

describe('HabitPresenter', () => {
  const habits = [
    { id: 1, name: 'Reading', count: 2 },
    { id: 2, name: 'Running', count: 0 },
  ];
  const maxLength = 3;
  let presenter;

  beforeEach(() => {
    presenter = new HabitPresenter(habits, maxLength);
  });

  it('inits with habits', () => {
    expect(presenter.getHabits()).toEqual(habits);
  });

  describe('adds', () => {
    it('adds new habit to the list', () => {
      presenter.add('Eating');

      expect(presenter.getHabits()[2].name).toBe('Eating');
      expect(presenter.getHabits()[2].count).toBe(0);
    });

    it('throws an error when the max habits limit is exceeded', () => {
      presenter.add('Eating');

      expect(() => presenter.add('Eating')).toThrow(`Number of habits cannot be more then ${maxLength}`);
    });
  });

  it('increments habit count', () => {
    presenter.increment(habits[0].id);

    expect(presenter.getHabits()[0].count).toBe(3);
  });

  describe('decrements', () => {
    it('decrements habit count', () => {
      presenter.decrement(habits[0].id);

      expect(presenter.getHabits()[0].count).toBe(1);
    });

    it('does not set the count value below 0 when decrements', () => {
      presenter.decrement(habits[1].id);

      expect(presenter.getHabits()[1].count).toBe(0);
    });
  });

  it('deletes habit from the list', () => {
    presenter.delete(habits[0].id);

    expect(presenter.getHabits().length).toBe(1);
    expect(presenter.getHabits()).toEqual([{ id: 2, name: 'Running', count: 0 }]);
  });

  describe('resets', () => {
    it('set all habit counts to 0', () => {
      presenter.reset();

      expect(presenter.getHabits()[0].count).toBe(0);
      expect(presenter.getHabits()[1].count).toBe(0);
    });

    it('does not create new object when count is 0', () => {
      const habits = presenter.getHabits();
      const updatedhabits = presenter.reset();
      //toBe는 참조값을 검사
      expect(updatedhabits[1]).toBe(habits[1]);
    });
  });
});
