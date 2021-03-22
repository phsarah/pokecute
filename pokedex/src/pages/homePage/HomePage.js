import React, {useContext, useEffect} from "react";
import GlobalStateContext from '../../global/GlobalStateContext'
import Navbar from '../../components/navbar/Navbar'
import PokemonCard from '../../components/pokemonCard/PokemonCard'
import {ContainerGrid} from './styles'

function HomePage(){
    
    const { states, setters, requests } = useContext(GlobalStateContext)

    useEffect(() => {
        requests.getPokemons()
    }, [])

    const pokemonsInPokeCard = states.pokemonList.map((pokemon) => {
        return (
            <PokemonCard
                title="Home"
                key={pokemon.name}
                pokemonName={pokemon.name}
                pokemonURL={pokemon.url}
                addToPokedex = {() => addToPokedex(pokemon)}
                setPokemon = {() => setPokemon(pokemon.name)}
            />
        )
    })

    const setPokemon = (pokemon) => {
        setters.setPokemonToDetail(pokemon)
        console.log(states.pokemonToDetail)
    }

    const addToPokedex = (newPokemon) => {
        if(states.pokedex.includes(newPokemon)){
            return alert(`${newPokemon.name} já está na Pokedex`)
        }
        let newPokedex = [...states.pokedex]
        newPokedex.push(newPokemon)
        setters.setPokedex(newPokedex)

        return alert(`${newPokemon.name} foi adicionado a sua Pokedex!`)
    }   
    
    return(
        <div>
            <Navbar title="Home"/>
            <ContainerGrid>
                {pokemonsInPokeCard}

            </ContainerGrid>

        </div>
    )
}

export default HomePage;