import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Card from '../Card';
import "./FavoriteList.css"


const FavoriteList = () => {
    const [favoritesList, setFavoritesList] = React.useState([]);
    useEffect(() => {
        localStorage.getItem('favorites') && setFavoritesList(JSON.parse(localStorage.getItem('favorites')!));
    }, [])

    console.log(favoritesList);
    return (
        <div className="favorites">
            <h2>Favorites</h2>
            <div className="cards">
                    {
                    favoritesList.map((character, idx) => (
                        <Link key={idx} to={`/characters/${idx+1}`}>
                            <Card idx={idx} character={character} />
                        </Link>
                    ))
                    }
            </div>
            <Link className='button' to="/characters">Back to Users</Link>
        </div>
    );
}

export default FavoriteList;