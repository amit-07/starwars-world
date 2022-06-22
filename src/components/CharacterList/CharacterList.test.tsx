import { render, screen } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';
import CharacterList from './CharacterList';


describe("CharacterList Component", () => {
    test('Renders characterlist Link', () => {
        render(<Router>
          <CharacterList />
        </Router>);
        const linkElement = screen.getByText(/Back to Home/i);
        expect(linkElement).toBeInTheDocument();
    });
})