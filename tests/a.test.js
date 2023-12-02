import Page from '../src/app/apage';
import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import { expect, describe, test } from '@jest/globals';

describe('adding a passing test to project', () => {
  test('passes', async () => {
    await expect(1).toEqual(1);
  });

  test('page test', async () => {
    render(<Page />);
    expect(screen.getByTestId('next-testid')).toBeInTheDocument();
  });
});
