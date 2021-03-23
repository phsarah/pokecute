import React from "react";
import {Container, Title} from './styles'
import { useHistory } from 'react-router-dom';
import { goToHome, goToPokedex, goBack } from '../../route/Coordinator';
import { Button } from "@chakra-ui/react"
import  pokeball  from '../../assets/pokeball.png'
import { withTheme } from "@emotion/react";

function Navbar(props){

    const history = useHistory()

    const ChangeButton = () => {
        switch(props.title){
            case('Home'):
            return(
                <Button 
                    width="180px"
                    variant="outline"
                    hover="grey"
                    color="white"
                    marginTop="10px"
                    onClick={() => goToPokedex(history)}
                >
                    Ver minha pokedex
                </Button>
            )
            case('Pokedex'):
            return(
                <Button
                    marginTop="10px"
                    marginBottom="30px"
                    variant="outline"
                    color="white"
                    onClick={() => goToHome(history)}
                >
                    Voltar para a lista de pokemons
                </Button>
            )
            case('Detail'):
            return(
                <div>
                    <Button
                        color= "white"
                        variant="outline"
                        marginTop="10px"
                        marginBottom="30px"
                        onClick={() => goBack(history)}
                >
                    Voltar
                    </Button>
                    <Button
                        color= "white"
                        variant="outline"
                        marginTop="10px"
                        marginBottom="30px"
                    >
                        Adicionar/Remover da pokedex
                    </Button>
                </div>
            )
            default:
                return(
                    <div></div>
                )
        }
    }
    const ChangeButton2 = () => {
        switch(props.title){
            case('Home'):
            return ""
            case('Pokedex'):
            return ""
            case('Detail'):
            return""
            default:
                return(
                    <div></div>
                )
        }
    }

    return(
        <Container>
            {props.title === 'Home'? <Title>Pokemons</Title> 
            : props.title === 'Pokedex' ?
                <Title>Pokedex</Title>
            : props.title === 'Detail' ?
                <Title>Detalhes</Title>
            :    ""
            }       
            <ChangeButton/>
            <ChangeButton2/>
        </Container>
    )
}

export default Navbar;