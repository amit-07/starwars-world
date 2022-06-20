import React from 'react';

const Card: React.FC<{idx:number, character: any}> = ({idx, character}) => (
    <ul className="card" key={idx}>
        <li><b>Name: </b>{character["name"]}</li>
        <li><b>Gender: </b>{character["gender"]}</li>
        <li><b>Homeland: </b><span>{character["homeworld"]}</span></li>
    </ul>
)

export default Card;