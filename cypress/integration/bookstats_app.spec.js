// @ts-nocheck
describe('Login Failed', () => {
  it('Should show home page', () => {
    cy.visit('/');
    cy.contains('Bookstats');
  });

  it('Should login fails with wrong password', () => {
    cy.contains('Sign In for Bookstats').click();

    cy.get('[name="email"]').type(Cypress.env('username'));
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
    cy.get('[name="email"]').clear().type(Cypress.env('username'));
    cy.get('[name="password"]').clear().type(Cypress.env('password'));
    cy.contains('Sign In').click();

    cy.contains('Bookstats', { timeout: 7000 });
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
      cy.contains('Edit Book', { timeout: 6000 }).click();
      cy.get('select').select('Completed');
      cy.contains('Submit').click();

      cy.get('#icon-books', { timeout: 5000 }).click();

      cy.contains('Completed');
      cy.contains('TestBook').click();
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
