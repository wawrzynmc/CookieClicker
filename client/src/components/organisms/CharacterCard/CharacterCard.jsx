import React from 'react';

function CharacterCard({ character: { name, image } }) {
    return (
        <>
            <p>Name: {name}</p>
            <img src={image} alt={name} />
        </>
    );
}

export default CharacterCard;
