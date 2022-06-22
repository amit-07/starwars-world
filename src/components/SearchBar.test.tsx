import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';

import SearchBar from "./SearchBar";

interface SearchProps {
    searchTerm: string;
    handleSearch: React.ChangeEventHandler;
}

function renderSearchBar(props: Partial<SearchProps> = {}) {
    const defaultProps: SearchProps = {
        searchTerm: "",
        handleSearch: jest.fn((value) => { })
    };
    return render(<SearchBar {...defaultProps} {...props} />);
}

describe("<SearchBar />", () => {
    test("should display a blank searchbar form by default", async () => {
        const { findByTestId, container } = renderSearchBar();

        const searchbar = await findByTestId("searchbar");
        expect(container.firstChild).toMatchInlineSnapshot(`
<div
  class="finder"
  data-testid="searchbar"
>
  <input
    class="finder"
    data-testid="search-input"
    placeholder="Search..."
    type="text"
    value=""
  />
</div>
`)
    });

    // test('updates on change', () => {

    //     const { queryByPlaceholderText } = renderSearchBar()

    //     const searchInput: HTMLElement | null = screen.getByRole('textbox');

    //     fireEvent.change(searchInput!, { target: { value: 'test' } });

    //     expect(searchInput!.value).toBe('');
    // });

    // test('calling render with the same component on the same container does not remount', () => {
    //     const {rerender} = renderSearchBar({searchTerm: 'test'});
    //     expect(screen.
      
    //     // re-render the same component with different props
    //     rerender(<NumberDisplay number={2} />)
    //     expect(screen.getByTestId('number-display')).toHaveTextContent('2')
      
    //     expect(screen.getByTestId('instance-id')).toHaveTextContent('1')
    //   })
});