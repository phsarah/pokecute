import React, {useState} from 'react';
import axios from 'axios';
import {BASE_URL} from '../constants/BaseUrl';
import GlobalStateContext from './GlobalStateContext';

const GlobalState = (props) => {
    const [pokemonList, setPokemonList] = useState([])
    const [pokedex, setPokedex] = useState([])
    const [pokemonToDetail, setPokemonToDetail] = useState([])

    const getPokemons = () => {
        axios
            .get(`${BASE_URL}pokemon/?offset=0&limit=60`)
            .then((res) => {
                setPokemonList(res.data.results)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    const states = { pokemonList, pokedex, pokemonToDetail };
    const setters = { setPokemonList, setPokedex, setPokemonToDetail }
    const requests = { getPokemons };

    const data = { states, setters, requests };
    return(
        <GlobalStateContext.Provider value={data}>
            {props.children}
        </GlobalStateContext.Provider>
    );
}

export default GlobalState;