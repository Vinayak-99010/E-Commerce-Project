import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders store title', () => {
  render(<App />);
  const title = screen.getByText(/My E-Commerce Store/i);
  expect(title).toBeInTheDocument();
});
