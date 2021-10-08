import { render, screen } from '@testing-library/react';
import App from './App';
import { Provider } from "react-redux";
import { store } from './store'

test('check page h1 title loads', async () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>);
  const element = screen.getByTestId('Signup-Title')
  expect(element).toBeInTheDocument();
});