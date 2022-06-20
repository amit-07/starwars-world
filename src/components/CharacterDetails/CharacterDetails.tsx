import React, { useEffect } from 'react';
import CONSTANTS from "../../constants";
import {getCharacters, getCollections} from "../../services/apis";
import {
    useParams,
    Link
  } from 'react-router-dom';

  import "./CharacterDetails.css";
  
  const CharacterDetails = () => {
    const { characterId } = useParams();
    const [selectedCharacter, setSelectedCharacter] = React.useState<any>(null);
    const [films, setFilms] = React.useState<any[] | undefined>([]);
    const [starships, setStarships] = React.useState<any[] | undefined>([]);
    const [isLoading, setIsLoading] = React.useState(true);
    const [isFavorite, setIsFavorite] = React.useState(false);
    useEffect(() => {
        const fetchData = async () => {
            const character = await getCharacters(`${CONSTANTS.CHARACTERS_URL}${characterId}`);
            const films = await getCollections(character.films);
            const starships = await getCollections(character.starships);
            const favorites = localStorage.getItem('favorites')!;
            const favArray = JSON.parse(favorites);
            await setFilms(films);
            await setStarships(starships);
            await setSelectedCharacter(character);
            await setIsLoading(false);
            const isFav = await checkForCharcterInFavorites(character, favArray);
            await setIsFavorite(isFav);
        }

        fetchData();
    }, []);

    const checkForCharcterInFavorites = (character: any, list: any[]) => {
        return list.some(elem => elem.name === character.name);
    }

    const addToFavorites = () => {
        const favorites = localStorage.getItem("favorites");
        let favoriteCharacter = {...selectedCharacter, isFavorite: true};
        if (favorites) {
            const favoritesArray = JSON.parse(favorites);
            if (!checkForCharcterInFavorites(selectedCharacter, favoritesArray)) {
                favoritesArray.push(favoriteCharacter);
            }
            localStorage.setItem("favorites", JSON.stringify(favoritesArray));
            setIsFavorite(true);
        } else {
            localStorage.setItem("favorites", JSON.stringify([favoriteCharacter]));
            setIsFavorite(true);
        }
    }

    const removeFromFavorites = () => {
        const favorites = localStorage.getItem("favorites");
        if (favorites) {
            const favoritesArray = JSON.parse(favorites);
            const currentCharacter = favoritesArray.find((elem: { name: any; }) => elem.name === selectedCharacter.name);
            const selectedIndex = favoritesArray.indexOf(currentCharacter);
            favoritesArray.splice(selectedIndex, 1);
            localStorage.setItem('favorites', JSON.stringify(favoritesArray));
        }
        setIsFavorite(false);
    }

  
    return (
      <div className='detailsPage'>
        <h2>Character: {characterId}</h2>
        <div>
             <h1>Character Details</h1>
             {isLoading ? <h3>Loading...</h3> :
             <ul className='characterProperties'>
                 <li><b>Name: </b> {selectedCharacter["name"]}</li>
                 <li><b>Hair Color: </b> {selectedCharacter["hair_color"]}</li>
                 <li><b>Eye Color: </b> {selectedCharacter["eye_color"]}</li>
                 <li><b>Gender: </b> {selectedCharacter["gender"]}</li>
                 <li><b>Home Planet: </b> {selectedCharacter["homeworld"]}</li>
                 <li><b>Films: </b> {films?.map((f) =>(f.title)).join(', ')}</li>
                 <li><b>Star Ships: </b>{selectedCharacter.starships.length ? starships?.map(s => s.name).join(", ") : "Not Available"}</li>
             </ul>
             }
         </div>
        <div className="action-buttons">
            <Link className='button' to="/characters">Back to Users</Link>
            {   (!isLoading) && <div>
                    {
                    (!isFavorite) ? <button className='fav-btn' onClick={addToFavorites}>Add to Favorite</button> :
                    <button className='rmv-btn' onClick={removeFromFavorites}>Remove from Favorite</button>
                    }
                </div>
            }
        </div>
      </div>
    );
  };


export default CharacterDetails;