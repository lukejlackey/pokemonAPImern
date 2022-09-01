import React, {useState, useEffect} from 'react';

const PokemonList = (props) => {

    const [isClicked, setIsClicked] = useState(false);
    const [pokemon, setPokemon] = useState([]);

    useEffect(() => {
      fetch('https://pokeapi.co/api/v2/pokemon/?limit=807')
        .then(response => response.json())
        .then(response => setPokemon(response.results))
        .catch(err => console.log(err))
    }, [isClicked]);

    const handleClick = (e) => {
        setIsClicked(!isClicked);
    }

    return(
        <div>
            {
                isClicked?
                <ul>
                    {pokemon.map( (p, i) =>
                        <li key={i}>{p.name}</li>
                    )}
                </ul>:
                <button onClick={handleClick}>Get Pokemon!</button>
            }
        </div>
    )
}

export default PokemonList;