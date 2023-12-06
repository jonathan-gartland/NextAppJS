import Page from '../../src/app/page';
// import '@testing-library/jest-dom';
//import { /*fireEvent,*/ render, screen } from '@testing-library/react';
// import { expect, describe, test, beforeAll } from '@jest/globals';

describe('adding a passing test to project', () => {
  // beforeAll(() => {});
  it('passes', async () => {
    await expect(1).eq(1);
  });

  // it('page test', async () => {
  //   render(<Page />);
  //   expect(screen.getByTestId('next-testid')).to.be.
  // });
  //
  // it('page test', async () => {
  //   render(<Page />);
  //   expect(screen.getByTestId('next-image-testid')).toBeInTheDocument();
  // });
  //
  // it('page test', async () => {
  //   render(<Page />);
  //   expect(screen.getByText('Get started by editing')).toBeInTheDocument();
  // });
  //
  // it('page test', async () => {
  //   render(<Page />);
  //   expect(screen.getByText('Deploy')).toBeInTheDocument();
  // });
});
