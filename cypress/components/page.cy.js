import Page from '../../src/app/page';

describe('adding a passing test to project', () => {
  // before(() => {});

  it('Check text in page, quick validation', () => {
    cy.mount(<Page />);
    cy.get('[data-cy="next-div-cy"]').should(
      'contain.text',
      'Learn about Next.js'
    );

    //  alternate way if needed
    //  cy.get('#cyid').then(($cyid) => {
    //    expect($cyid).to.contain('Learn about Next.js');
    //  }); // can chain finally, etc if need be
  });
  // after(() => {});
});
