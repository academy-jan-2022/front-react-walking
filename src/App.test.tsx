import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

 test('renders header', () => {
   render(<App />);
   const heading= screen.getByRole('heading');

   expect(heading).toBeInTheDocument();
   expect(heading).toHaveTextContent('Superheroes');
 });

