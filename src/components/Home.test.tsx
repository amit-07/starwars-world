import * as React from 'react';
import { MemoryRouter as Router } from 'react-router-dom';
import { render, RenderResult, screen } from '@testing-library/react';
import Home from './Home';
let documentBody: RenderResult;
describe('<Home />', () => {
  beforeEach(() => {
    documentBody = render(
    <Router>
        <Home />
    </Router>
    );
  });
  it('Shows Header Title', () => {
    // expect(screen.getByTestId('all-characters').closest('a')).textContent.toBe('Click to Explore All Star Wars Characters');
    // expect(documentBody.getByText('404')).toBeInTheDocument();
    // expect(screen.getByText('Click Me').closest('a')).toHaveAttribute('href', 'https://www.test.com/')
  });
});