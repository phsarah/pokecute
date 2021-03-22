import React, {useContext, useEffect} from "react";
import GlobalStateContext from '../../global/GlobalStateContext'
import Navbar from '../../components/navbar/Navbar'
import PokemonCard from "../../components/pokemonCard/PokemonCard";

function Pokedex(){
    const { states, setters, requests } = useContext(GlobalStateContext)

    const pokemonInPokedex = states.pokedex.map((pokemon) => {
        return(
            <PokemonCard
                title="Pokedex"
                key={pokemon.name}
                pokemonName={pokemon.name}
                pokemonURL={pokemon.url}
            />
        )
    })

    return(
        <div>
            <Navbar title="Pokedex"/>
            {pokemonInPokedex}

        </div>
    )
}

export default Pokedex;