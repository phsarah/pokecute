import React from "react";
import Container from './styles'
import { useHistory } from 'react-router-dom';
import { goToHome, goToPokedex, goBack } from '../../route/Coordinator'

function Navbar(props){

    const history = useHistory()

    const Button = () => {
        switch(props.title){
            case('Home'):
            return(
                <button
                    onClick={() => goToPokedex(history)}
                >
                    Ver minha pokedex
                </button>
            )
            case('Pokedex'):
            return(
                <button
                    onClick={() => goToHome(history)}
                >
                    Voltar para a lista de pokemons
                </button>
            )
            case('Detail'):
            return(
                <button
                    onClick={() => goBack(history)}
                >
                    Voltar
                </button>
            )
            default:
                return(
                    <div></div>
                )
        }
    }
    const Button2 = () => {
        switch(props.title){
            case('Home'):
            return(
                <button></button>
            )
            case('Pokedex'):
            return(
                <button></button>
            )
            case('Detail'):
            return(
                <button>Adicionar/Remover da pokedex</button>
            )
            default:
                return(
                    <div></div>
                )
        }
    }

    return(
        <Container>
            <Button/>
                <p>Pokedex</p>
            <Button2/>
        </Container>
    )
}

export default Navbar;