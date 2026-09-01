// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders EtherStackPlus title', () => {
    render(<App />);
    const titleElement = screen.getByText(/EtherStackPlus/i);
    expect(titleElement).toBeInTheDocument();
});
