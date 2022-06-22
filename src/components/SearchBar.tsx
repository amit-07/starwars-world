import React, { ChangeEventHandler } from 'react';
import "./SearchBar.css";

const SearchBar:React.FC<{searchTerm:string, handleSearch: ChangeEventHandler}> = ({searchTerm, handleSearch}) => {
    return (
        <div data-testid="searchbar" className="finder">
            <input data-testid="search-input" className='finder' type="text" placeholder="Search..." value={searchTerm} onChange={handleSearch}/>
        </div>
    );
}


export default SearchBar;