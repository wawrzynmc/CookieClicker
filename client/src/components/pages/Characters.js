import React, { useEffect, useState } from 'react';
import { getCharacters } from '../../api/characters-api';
import CharacterCard from '../organisms/CharacterCard/CharacterCard';
import { Button } from '@material-ui/core';

function Characters() {
    const [characters, setCharacters] = useState([]);
    const [page, setPage] = useState(1);

    const onMoreClickHandler = () => {
        setPage((prevValue) => ++prevValue);
    };

    useEffect(() => {
        const getData = async (p) => {
            const fetchedCharacters = await getCharacters(p);

            setCharacters((prevCharacters) => [...prevCharacters, ...fetchedCharacters]);
        };

        getData(page);
    }, [page]);

    console.log(characters);

    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            {characters.map((character) => (
                <CharacterCard key={character.id} character={character} />
            ))}
            <Button
                color="secondary"
                title="load more"
                variant="contained"
                size="large"
                style={{ marginTop: '20px' }}
                onClick={onMoreClickHandler}
            />
        </div>
    );
}

export default Characters;
