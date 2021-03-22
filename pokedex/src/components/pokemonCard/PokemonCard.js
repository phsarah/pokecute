import React, {useEffect, useState} from "react";
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { goToDetail } from '../../route/Coordinator'
import {Container} from './styles'


function PokemonCard(props){
    const [pokemonDetails, setPokemonDetails] = useState([])
    const [pokemonImage, setPokemonImage] = useState()

    useEffect(() => {
        getPokemonDetails()
    }, [])
    const history = useHistory()

    const getPokemonDetails = () => {
        axios
            .get(`${props.pokemonURL}`)
            .then((res) => {
                setPokemonDetails(res)
                setPokemonImage(res.data.sprites.front_default)
            })
            .catch((e) => {
                console.log(e)
            })
    }


    const Button = () => {
        switch(props.title){
            case('Home'):
            return(
                <div>
                    <button
                        onClick={props.addToPokedex}
                    >
                        Adicionar
                    </button>
                    <button
                        onClick={props.setPokemon}
                    >
                        ver detal.
                    </button>
                </div>
            )
            case('Pokedex'):
            return(
                <div>
                    <button>Remover</button>
                    <button>ver detal.</button>
                </div>
            )
            default:
                return<div></div>
        }
    }
    return(
        <Container>
            <p>{props.pokemonName}</p>
            <img src={pokemonImage}/>
            <Button/>
        </Container>
    )
}

export default PokemonCard;