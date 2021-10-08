import { render, screen } from '@testing-library/react';
import App from './App';

test('check page h1 title loads', async () => {
  render(<App />);
  const element = screen.getByTestId('Signup-Title')
  expect(element).toBeInTheDocument();
});