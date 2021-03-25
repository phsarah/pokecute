import React, {useContext, useState, useEffect} from 'react'
import axios from 'axios'
import Navbar from '../../components/navbar/Navbar'
import GlobalStateContext from '../../global/GlobalStateContext'
import {DetailsContainer, SpritesContainer, SpritesFront, SpritesBack, StatsContainer, 
TypesMoveContainer, TypesContainer, MovesContainer, Container, Title, Text, TextType } from './styles'
import bootstrap from 'bootstrap'

const TYPE_COLORS = {
    bug: 'B1C12E',
    dark: '4F3A2D',
    dragon: '755EDF',
    electric: 'FCBC17',
    fairy: 'F4B1F4',
    fighting: '823551D',
    fire: 'E73B0C',
    flying: 'A3B3F7',
    ghost: '6060B2',
    grass: '74C236',
    ground: 'D3B357',
    ice: 'A3E7FD',
    normal: 'C8C4BC',
    poison: '934594',
    psychic: 'ED4882',
    rock: 'B9A156',
    steel: 'B5B5C3',
    water: '3295F6'
  };

function DetailPage(){
    const { states } = useContext(GlobalStateContext)

    const [pokemonData, setPokemonData] = useState([]);
    const [pokemonType, setPokemonType] = useState('');
    const [pokemonMoves, setPokemonMoves] = useState([]);

    useEffect(() => {
        getPokemonDetail()
    }, [])

    const getPokemonDetail = () => {
        const data = []
        axios
            .get(`https://pokeapi.co/api/v2/pokemon/${states.pokemonToDetail}`)
            .then((res) => {
                data.push(res.data)
                setPokemonType(res.data.types)
                setPokemonData(data)
                console.log(pokemonData)
                setPokemonMoves(res.data.moves)
            })
            .catch((e) => {
                console.log(e)
            })
    }

    return(
        <Container>
            <Navbar title='Detail'/>
            {pokemonData.map((data) => {
                return(
                    <DetailsContainer>
                    <SpritesContainer>
                        <SpritesFront>
                            <img src={data.sprites.front_default} alt='imagem de frente' />
                        </SpritesFront>
    
                        <SpritesBack>
                            <img src={data.sprites.back_default} alt='imagem de costas'/>
                        </SpritesBack>
                    </SpritesContainer>
    
                    <StatsContainer>
                        <Title>Stats</Title>
                        <Text>HP: <text class="progress-bar">{data.stats[0].base_stat}</text> </Text>
                        <Text>attack: {data.stats[1].base_stat} </Text>
                        <Text>defense: {data.stats[2].base_stat}</Text>
                        <Text>special-attack: {data.stats[3].base_stat}</Text>
                        <Text>special-defense: {data.stats[4].base_stat}</Text>
                        <Text>speed: {data.stats[5].base_stat}</Text>
                    </StatsContainer>
                    <TypesMoveContainer>
                        <TypesContainer>
                            <Title>Types</Title>
                            {pokemonType.map((types) =>{
                               return(
                                <span
                                    key={types.type.name}    
                                    style={{
                                        backgroundColor: `#${TYPE_COLORS[types.type.name]}`,
                                        color: 'white'
                                    }}
                                >
                                </span>
                               )
                           })}
                        </TypesContainer>
                    </TypesMoveContainer>
                    <MovesContainer>
                            <Title>Moves</Title>
                            {pokemonMoves.map((moves) => {
                                return(
                                <Text>{moves.move.name}</Text>
                                )
                            })}
                    </MovesContainer>
                </DetailsContainer>
                )
            })}
        </Container>
    )
}

export default DetailPage;