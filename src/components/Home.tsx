import { Link } from "react-router-dom";
import React from "react";
import "./Home.css";


const Home = () => {
    return (
        <div>
            <Link className="home-btn" to="characters">
                <h2>Click to Explore All Star Wars Characters</h2>
            </Link>
            <Link className="fav-section" to="/favorites">
                <h2>Check your Favorite Characters</h2>
            </Link>
        </div>
    );

}

export default Home;