import '@testing-library/cypress/add-commands';

describe('Habit Tracker', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('renders', () => {
    cy.findByText('Habit Tracker').should('exist');
  });

  it('adds new habit at the end', () => {
    cy.findByPlaceholderText('Habit').type('New Habit');
    cy.findByText('Add').click();
    cy.findAllByTestId('habit-name').last().should('have.text', 'New Habit');
    cy.findAllByTestId('habit-count').last().should('have.text', '0');
  });

  it('increases count', () => {
    cy.findByPlaceholderText('Habit').type('New Habit');
    cy.findByText('Add').click();
    cy.findAllByTitle('increment').first().click();
    cy.findAllByTestId('habit-count').first().should('have.text', '1');
  });

  it('decreases count', () => {
    cy.findByPlaceholderText('Habit').type('New Habit');
    cy.findByText('Add').click();
    cy.findAllByTitle('increment').first().click();
    cy.findAllByTitle('decrement').first().click();
    cy.findAllByTestId('habit-count').first().should('have.text', '0');
  });

  it('does not decrease below 0', () => {
    cy.findByPlaceholderText('Habit').type('New Habit');
    cy.findByText('Add').click();
    cy.findAllByTitle('decrement').first().click();
    cy.findAllByTestId('habit-count').first().should('have.text', '0');
  });

  it('shows active count on the header', () => {
    cy.findByPlaceholderText('Habit').type('New Habit');
    cy.findByText('Add').click();
    cy.findAllByTitle('increment').first().click();
    cy.findByTestId('total-count').should('have.text', '1');
  });

  it('resets to 0 when clicking "Reset All"', () => {
    cy.findByPlaceholderText('Habit').type('New Habit1');
    cy.findByText('Add').click();
    cy.findByPlaceholderText('Habit').type('New Habit2');
    cy.findByText('Add').click();

    cy.findAllByTitle('increment').first().click();
    cy.findAllByTitle('increment').last().click();

    cy.findByText('Reset All').click();

    cy.findAllByTestId('total-count').each((item) => {
      cy.wrap(item).should('have.text', '0');
    });
    cy.findByTestId('total-count').should('have.text', '0');
  });

  it('deletes an item', () => {
    cy.findByPlaceholderText('Habit').type('New Habit1');
    cy.findByText('Add').click();
    cy.findByPlaceholderText('Habit').type('New Habit2');
    cy.findByText('Add').click();
    cy.findAllByTitle('delete').first().click();
    cy.findAllByTestId('habit-name').findByText('New Habit1').should('not.exist');
  });
});
