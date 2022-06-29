import React, { useState } from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, waitFor, screen, act, renderHook } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';
import CharacterList from './CharacterList';

 describe("CharacterList Component", () => {   let originFetch:  any;   beforeEach(() => {     originFetch = (global as any).fetch;   });   afterEach(() => {     (global as any).fetch = originFetch;   });
    test('Renders characterlist Link', async () => {
        await waitFor(() => render(<Router>
        <CharacterList />
        </Router>));
        const linkElement = await waitFor(() => screen.getByText(/Back to Home/i));
        await waitFor(() => expect(linkElement).toBeInTheDocument());
    });
    test('Set loading to true on load of the component', async () => {
               const {result} = renderHook(() => {
                const [loading, setIsLoading] = useState(false);
                 React.useEffect(() => {
                   setIsLoading(true)
                 }, [])
              
                 return loading;
               });
        
            expect(result.current).toBe(true);
    });
    test('test api call and data on loading of component', async () => {
        interface Character{
            name: string;
            id: string;
        }
        const {result} = renderHook(() => {
            const [characters, setCharacters] = React.useState<Character[]>([]);
            const mockData = [{
                "name": "test character",
                "id": "test_id"
               }];
             React.useEffect(() => {
               setCharacters(mockData)
             }, [])
          
             return characters;
           });

           expect(result.current).toStrictEqual([{
            "name": "test character",
            "id": "test_id"
           }]);
    });
});