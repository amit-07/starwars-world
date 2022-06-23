import React, {useState} from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, waitFor, screen, renderHook } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';
import CharacterList from './CharacterDetails';
import CharacterDetails from './CharacterDetails';


describe("CharacterDetails component", () => {
  let originFetch:  any;
  beforeEach(() => {
    originFetch = (global as any).fetch;
  });
  afterEach(() => {
    (global as any).fetch = originFetch;
  });
    test('Renders Character Details', () => {
        render(<Router>
          <CharacterDetails />
        </Router>);
        const backToUsers = screen.getByText(/Back to Users/i);
        expect(backToUsers).toBeInTheDocument();
    });

    test('Use Effect api call', () => {
        const {result} = renderHook(() => {
        const [selectedCharacter, setSelectedCharacter] = React.useState<any>(null);
        React.useEffect(() => {
            setSelectedCharacter("Luke");
        }, [])
      
        return selectedCharacter
      })
      expect(result.current).toBe('Luke');
    });
    
});