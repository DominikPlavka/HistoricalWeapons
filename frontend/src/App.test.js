import { screen } from '@testing-library/react';


test('checks if text is not present', () => {
  expect(screen.queryByText('This should not appear on screen.')).toBeFalsy();
});
