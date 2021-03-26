import React,  { useContext } from "react";
import {Container, Title, ContainerButton} from './styles'
import { useHistory } from 'react-router-dom';
import { goToHome, goToPokedex, goBack } from '../../route/Coordinator';
import { Button } from "@chakra-ui/react"
import GlobalStateContext from '../../global/GlobalStateContext';
import pokedex from '../../assets/pokedex.png'

function Navbar(props){

    const history = useHistory()
    const { states, setters, requests } = useContext(GlobalStateContext)



    const ChangeButton = (color) => {
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
                    borderColor='white'
                    color='white'
                    onClick={() => goToHome(history)}
                >
                    Lista de Pokemons
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

    return(
            <div>
                {props.title === 'Home' ? 
                    <Container
                        style={{ backgroundImage: "url('http://papers.co/wallpaper/papers.co-sk21-green-light-pastel-blur-gradation-34-iphone6-plus-wallpaper.jpg')"}}
                    >
                        <Title> </Title>
                        <img src={'https://o.remove.bg/downloads/75165fb7-e42d-43c1-80c1-3c2cd141658e/hd-pokemon-logo-hd-pokemon-logo-png-clipart-removebg-preview.png'}/>
                        <ChangeButton/>
                    </Container>
                    : props.title === 'Pokedex' ?
                    <Container
                        style={{ backgroundColor: "transparent"}}
                    >
                        <Title
                             style={{ color: "white"}}
                        >  </Title>
                        <img src={'https://o.remove.bg/downloads/75165fb7-e42d-43c1-80c1-3c2cd141658e/hd-pokemon-logo-hd-pokemon-logo-png-clipart-removebg-preview.png'}/>
                        <ChangeButton color="white"/>
                    </Container>
                    : props.title === 'Detail' ?
                    <Container
                        style={{ backgroundImage: "url('http://papers.co/wallpaper/papers.co-sk21-green-light-pastel-blur-gradation-34-iphone6-plus-wallpaper.jpg')"}}
                >
                        <Title
                             style={{ color: "white"}}
                        >  </Title>
                        <img src={'https://o.remove.bg/downloads/75165fb7-e42d-43c1-80c1-3c2cd141658e/hd-pokemon-logo-hd-pokemon-logo-png-clipart-removebg-preview.png'}/>
                        <ChangeButton color="white"/>
                    </Container>
                    : ""
                }
            </div>
    )
}

export default Navbar;