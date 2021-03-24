import React, {useContext, useEffect} from "react";
import GlobalStateContext from '../../global/GlobalStateContext'
import Navbar from '../../components/navbar/Navbar'
import PokeCard from "../../components/pokeCard/PokeCard"
import {ContainerGrid, Container} from './styles'


function Pokedex(){
    const { states, setters, requests } = useContext(GlobalStateContext)

    const removeFromPokedex =(pokeToRemove) => {
        const index = states.pokedex.findIndex((pokemon) => pokemon.name === pokeToRemove.name)
        let newPokedex = [...states.pokedex]
        newPokedex.splice(index, 1)
        setters.setPokedex(newPokedex)
    }

    const pokemonInPokedex = states.pokedex.map((pokemon) => {
        return(
            <PokeCard
                title="Pokedex"
                key={pokemon.name}
                pokemonName={pokemon.name}
                pokemonURL={pokemon.url}
                setPokemon = {() => setPokemon(pokemon.name)}
                removePokemon={() => removeFromPokedex(pokemon)}
            />
        )
    })

    const setPokemon = (pokemon) => {
        setters.setPokemonToDetail(pokemon)
    }
    return(
        <Container>
            <Navbar title="Pokedex"/>
            <ContainerGrid>
            {pokemonInPokedex}
            </ContainerGrid>

        </Container>
    )
}

export default Pokedex;