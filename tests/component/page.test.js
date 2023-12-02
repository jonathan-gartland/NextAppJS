import Page from '../../src/app/page';
import '@testing-library/jest-dom';
import { /*fireEvent,*/ render, screen } from '@testing-library/react';
import { expect, describe, test, beforeAll } from '@jest/globals';

describe('adding a passing test to project', () => {
  beforeAll(() => {});
  test('passes', async () => {
    await expect(1).toEqual(1);
  });

  test('page test', async () => {
    render(<Page />);
    expect(screen.getByTestId('next-testid')).toBeInTheDocument();
  });

  test('page test', async () => {
    render(<Page />);
    expect(screen.getByTestId('next-image-testid')).toBeInTheDocument();
  });

  test('page test', async () => {
    render(<Page />);
    expect(screen.getByText('Get started by editing')).toBeInTheDocument();
  });

  test('page test', async () => {
    render(<Page />);
    expect(screen.getByText('Deploy')).toBeInTheDocument();
  });
});
