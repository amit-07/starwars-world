import React, { useEffect, useCallback } from 'react';
import { Routes, Route, Link, Outlet } from 'react-router-dom';
import _ from 'lodash';
import SearchBar from '../SearchBar';
import {getCharacters} from "../../services/apis";
import CONSTANTS from "../../constants";
import "./CharacterList.css";
import Card from '../Card';

const CharacterList = () => {
    const [characters, setCharacters] = React.useState<any[]>([]);
    const [isLoading, setIsLoading] = React.useState(true);
    const [searchTerm, setSearchTerm] = React.useState("");
    const [defaultCharacters, setDefaultCharacters] = React.useState<any[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const characters = await getCharacters(CONSTANTS.CHARACTERS_URL);
            await setIsLoading(false);
            await setDefaultCharacters(characters.results);
            await setCharacters(characters.results);
        }

        fetchData();
    }, [])

    const handleSearch = (event:any) => {
        const searchTerm = event.target.value;
        setSearchTerm(searchTerm);
        debouncedSearch(searchTerm, defaultCharacters);
    }

    const debouncedSearch = useCallback(
		_.debounce((searchTerm: string, defaultCharacters: any[]) : void => {
            const filteredCharacters = defaultCharacters.filter(character => character.name.toLowerCase().includes(searchTerm.toLowerCase()));
            filteredCharacters.length ? setCharacters(filteredCharacters) : setCharacters(defaultCharacters);
        }, 1000),
		[], // will be created only once initially
	);

    return (
       <div className="container">
            <SearchBar searchTerm={searchTerm} handleSearch={handleSearch}/>
            <div className="cards">
                {isLoading ? <h3>Loading...</h3> :
                    characters.map((character, idx) => (
                        <Link key={idx} to={`${idx+1}`}>
                            <Card idx={idx} character={character} />
                        </Link>
                    ))
                }
            </div>
            <Link className='button' to="/">Back to Home</Link>
        </div> 
    )
}

export default CharacterList;