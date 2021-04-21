// @ts-nocheck
describe('Login Failed', () => {
  it('Should show home page', () => {
    cy.visit('/');
    cy.contains('Bookstats');
  });

  it('Should login fails with wrong password', () => {
    cy.contains('Sign In for Bookstats').click();

    cy.get('[name="email"]').type('ibysytho@gmail.com');
    cy.get('[name="password"]').type('Wrong_Password1');
    cy.contains('Sign In').click();

    cy.contains('Incorrect username or password');
  });
});

describe('Login Success', () => {
  before(() => {
    cy.signIn();
  });
  beforeEach(() => {
    cy.restoreLocalStorage();
  });
  afterEach(() => {
    cy.saveLocalStorage();
  });

  it('Should login in your account', () => {
    cy.visit('/books');
    cy.contains('Bookstats', { timeout: 6000 });
  });

  describe('User books', () => {
    it('Should create a new book', () => {
      cy.contains('Add New Book', { timeout: 5000 }).click();
      cy.get('[name="name"]').type('TestBook');
      cy.get('[name="author"]').type('TestAuthor');
      cy.get('[name="pages"]').type('123');
      cy.contains('Submit').click();
    });

    it('Should complete that test book', () => {
      cy.contains('TestBook').click();
      cy.contains('Edit Book').click();
      cy.get('select').select('Completed');
      cy.contains('Submit').click();
      cy.get('#completed-date', { timeout: 5000 }).should(
        'not.contain',
        'Not Yet'
      );
    });

    it('Should delete that test book', () => {
      cy.contains('Delete Book').click();
      cy.contains('Yes, Delete it!').click();

      cy.contains('Add New Book', { timeout: 6000 });
    });

    it('Should log out user', () => {
      cy.contains('Sign Out').click();

      cy.contains('You have been disconnected');
    });
  });
});
