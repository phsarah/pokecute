import React from "react";
import { useHistory } from 'react-router-dom';
import { goToDetail } from '../../route/Coordinator'
import {Container} from './styles'


function PokemonCard(props){

    const history = useHistory()

    const Button = () => {
        switch(props.title){
            case('Home'):
            return(
                <div>
                    <button>Adicionar</button>
                    <button
                        onClick={() => goToDetail(history)}
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
            <div>Foto</div>
            <Button/>
        </Container>
    )
}

export default PokemonCard;