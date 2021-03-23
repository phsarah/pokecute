import React, {useEffect, useState} from "react";
import axios from 'axios'
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import CardActions from '@material-ui/core/CardActions';
import { Button } from "@chakra-ui/react"
import {Container, HeaderIndex, CardBody} from './styles'
import Typography from '@material-ui/core/Typography';


function PokeCard(props){
    const [pokemonDetails, setPokemonDetails] = useState([])
    const [pokemonImage, setPokemonImage] = useState()
    const [pokemonIndex, setPokemonIndex] = useState("")

    useEffect(() => {
        getPokemonDetails()
        changeURL()
        
        
    }, [])

    const changeURL = () => {
         setPokemonIndex(props.pokemonURL.split("/")[props.pokemonURL.split('/').length - 2])
    }

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


    const ChangeButton = () => {
        switch(props.title){
            case('Home'):
            return(
                <div>
                    <Button
                        variant="outline"
                        onClick={props.addToPokedex}
                    >
                        Adicionar
                    </Button>
                    
                    <Link to={'/details'}>
                    <Button
                    
                        variant="outline"
                        onClick={props.setPokemon}
                    >
                        Ver detal.
                    </Button>
                    </Link>
                </div>
            )
            case('Pokedex'):
            return(
                <div>
                    <Button
                        variant="outline"
                    >
                        Remover
                    </Button>
                    <Button
                        variant="outline"
                    >
                        ver detal.
                    </Button>
                </div>
            )
            default:
                return<div></div>
        }
    }
    return(
        <Container>
          
            <CardBody>
              <HeaderIndex>
                00{pokemonIndex}
           </HeaderIndex>
                <img src={pokemonImage}/>
                <Typography align="center">
                    {props.pokemonName}
                </Typography>
                <CardActions>
                    <ChangeButton/>
                </CardActions>
              </CardBody>
              
        </Container>
    )
}

export default PokeCard;