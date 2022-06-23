import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, waitFor, screen } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';
import CharacterList from './CharacterList';


describe("CharacterList Component", () => {
  let originFetch:  any;
  beforeEach(() => {
    originFetch = (global as any).fetch;
  });
  afterEach(() => {
    (global as any).fetch = originFetch;
  });
    test('Renders characterlist Link', () => {
        render(<Router>
          <CharacterList />
        </Router>);
        const linkElement = screen.getByText(/Back to Home/i);
        expect(linkElement).toBeInTheDocument();
    });

    test('Api call on render of the component', async () => {
      const fakeResponse = { title: 'example text' };
      const mRes = { json: jest.fn().mockResolvedValueOnce(fakeResponse) };
      const mockedFetch = jest.fn().mockResolvedValueOnce(mRes as any);
      (global as any).fetch = mockedFetch;
      const { getByTestId } = render(<Router>
        <CharacterList />
      </Router>);
      expect(screen.getByTestId("loading")).toBeInTheDocument();
      const div = await waitFor(() => getByTestId('char-list'));
      expect(await mockedFetch).toBeCalledTimes(1);
    });
})