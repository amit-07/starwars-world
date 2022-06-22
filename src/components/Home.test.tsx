import { render, screen } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';
import Home from './Home';


describe("Home Component", () => {
    test('Renders characterlist Link', () => {
        render(<Router>
          <Home />
        </Router>);
        const linkElement = screen.getByText(/Click to Explore All Star Wars Characters/i);
        expect(linkElement).toBeInTheDocument();
    });

    test('Renders Favoritelist Link', () => {
        render(<Router>
          <Home />
        </Router>);
        const linkElement = screen.getByText(/Check your Favorite Characters/i);
        expect(linkElement).toBeInTheDocument();
    });
})