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

    test('updates on change', async () => {
        const handleSearch = jest.fn();
        const { queryByPlaceholderText } = renderSearchBar({ searchTerm: "", handleSearch })

        const searchInput: HTMLInputElement | null = screen.queryByPlaceholderText('Search...');

        await fireEvent.change(searchInput!, { target: { value: '' } });
        expect(searchInput!.value).toBe('');
    });
});