import React, {useEffect, useState} from "react";
import axios from 'axios'
import { Link } from 'react-router-dom';
import CardActions from '@material-ui/core/CardActions';
import { Button } from "@chakra-ui/react"
import {Container, HeaderIndex, CardBody} from './styles'
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress'


function PokeCard(props){
    const [pokemonDetails, setPokemonDetails] = useState([])
    const [pokemonImage, setPokemonImage] = useState()
    const [pokemonIndex, setPokemonIndex] = useState("")
    const [isLoading, setIsLoading] = useState(false)


    useEffect(() => {
        getPokemonDetails()
        changeURL()
        
        
    }, [])

    const changeURL = () => {
         setPokemonIndex(props.pokemonURL.split("/")[props.pokemonURL.split('/').length - 2])
    }

    const getPokemonDetails = () => {
        setIsLoading(true)
        axios
            .get(`${props.pokemonURL}`)
            .then((res) => {
                setPokemonDetails(res)
                setPokemonImage(res.data.sprites.front_default)
                setIsLoading(false)
            })
            .catch((e) => {
                setIsLoading(false)
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
                        onClick={props.removePokemon}
                    >
                        Remover
                    </Button>
                    <Link to={'/details'}>
                    <Button
                        variant="outline"
                        onClick={props.setPokemon}
                    >
                        ver detal.
                    </Button>
                    </Link>
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
                {isLoading ? <CircularProgress size={30}/> : <img src={pokemonImage}/>}
                <Typography align="center">
                    {props.pokemonName
                        .substring(0,1)
                        .toUpperCase()
                        .concat(props.pokemonName
                        .substring(1))
                    }
                </Typography>
                <CardActions>
                    <ChangeButton/>
                </CardActions>
              </CardBody>
              
        </Container>
    )
}

export default PokeCard;