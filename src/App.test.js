import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe('App Component', () => {
  test('renders main heading', () => {
    render(<App />);
    expect(screen.getByRole('heading', { name: /OverLeveraged ZEN/i })).toBeInTheDocument();
  });

  test('validates number inputs', () => {
    render(<App />);
    const interestInput = screen.getByLabelText(/Interest Rate/i);
    fireEvent.change(interestInput, { target: { value: '-10' } });
    expect(interestInput).toHaveAttribute('aria-invalid', 'true');
  });

  test('validates currency inputs', () => {
    render(<App />);
    const balanceInput = screen.getByLabelText(/Balance/i);
    fireEvent.change(balanceInput, { target: { value: 'invalid' } });
    expect(balanceInput).toHaveAttribute('aria-invalid', 'true');
  });
});
