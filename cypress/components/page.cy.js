import Page from '../../src/app/page';

describe('adding a passing test to project', () => {
  // before(() => {});

  it('Check text in page, quick validation', () => {
    cy.mount(<Page />);
    cy.get('#cyid').then(($cyid) => {
      expect($cyid).to.contain('Learn about Next.js');
    });
  });
  // after(() => {});
});
