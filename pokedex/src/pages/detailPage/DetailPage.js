import React, {useContext, useState, useEffect} from 'react'
import axios from 'axios'
import Navbar from '../../components/navbar/Navbar'
import GlobalStateContext from '../../global/GlobalStateContext'
import {Move, Container, Title, Text } from './styles'
import CircularProgress from '@material-ui/core/CircularProgress'

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
    const [pokemonType, setPokemonType] = useState([]);
    const [pokemonMoves, setPokemonMoves] = useState([]);
    const [isLoading, setIsLoading] = useState(false)


    useEffect(() => {
        getPokemonDetail()
        
    }, [])

    
    const getPokemonDetail = () => {
        const data = []
        setIsLoading(true)
        axios
            .get(`https://pokeapi.co/api/v2/pokemon/${states.pokemonToDetail}`)
            .then((res) => {
                data.push(res.data)
                setPokemonType(res.data.types)
                setPokemonData(data)
                setPokemonMoves(res.data.moves)
                setIsLoading(false)
            })
            .catch((e) => {
                setIsLoading(false)
                console.log(e)
            })
    }

    return(
        <Container>
            <Navbar title='Detail' color='black'/>
               {pokemonData.map((data) => {
                   return(
                    <div className="container" style={{marginTop: '40px'}}>
                        <div className="card">
                            <div className="card-header">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="float-right">
                                            {pokemonType && pokemonType.map((types) => {
                                                return(
                                                    <span
                                                        key={types.type.name}  
                                                        className="badge badge-pill mr-1"  
                                                        style={{
                                                        backgroundColor: `#${TYPE_COLORS[types.type.name]}`,
                                                        color: 'white'
                                                        }}
                                                    >
                                                        {types.type.name}
                                                    </span>
                                                )
                                            })}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    <div className="card">
                        <div className="card-body">
                        <div className="row">
                            <div className="col-sm-3">
                            <div className="row align-items-center">
                            {isLoading ? <CircularProgress size={30}/> : <img src={data.sprites.front_default} alt='imagem de frente'
                                 
                                        className="card-img-top  mx-auto mt-2"
                                        style={{width: '9rem', height: '10rem'}}
                                 />}
                             </div>
                             <div className="row align-items-center">
                             {isLoading ? <CircularProgress size={30}/> :<img src={data.sprites.back_default} alt='imagem de costas'
                                        className="card-img-top  mx-auto mt-2"
                                        style={{width: '9rem', height: '10rem'}}
                                 />}
                             </div>
                            </div>
                            <div className="col-sm-6"
                                style={{top:"40px"}}
                            >
                                <div className="row align-items-center">
                                    <div className="col-md-9" style={{bottom: "100px"}}>
                                        <Text className="mx-auto" 
                                               style={{ fontSize: '18px', position: 'relative', top: "60px", paddingBottom:"40px"}}>
                                            {data.name
                                               
                                            }
                                        </Text>
                                    </div>
                                </div>
                                    <div className="col">
                                    <div className="row align-items-center">
                                        <Text className="col-10 col-md-3" 
                                        >
                                             HP
                                        </Text>
                                        <div className="col-12 col-md-9" >
                                            <div className="progress">
                                                <div className="progress-bar" role="progressbar" 
                                                        style={{width: `${data.stats[0].base_stat}%`}} 
                                                        aria-valuenow="75" 
                                                        aria-valuemin="0" 
                                                        aria-valuemax="100"
                                                    >
                                                    <small>{data.stats[0].base_stat}</small>
                                                </div>
                                            </div> 
                                        </div>
                                    </div>
                                    <div className="row align-items-center">
                                        <Text className="col-10 col-md-3">
                                            Attack
                                        </Text>
                                        <div className="col-12 col-md-9">
                                            <div className="progress">
                                                <div class="progress-bar" role="progressbar" 
                                                        style={{width: `${data.stats[1].base_stat}%`}} 
                                                        aria-valuenow="75" 
                                                        aria-valuemin="0" 
                                                        aria-valuemax="100"
                                                    >
                                                    <small>{data.stats[1].base_stat}</small>
                                                </div>
                                            </div> 
                                        </div>
                                    </div>
                                    <div className="row align-items-center">
                                        <Text className="col-10 col-md-3">
                                            Defense
                                        </Text>
                                        <div className="col-12 col-md-9">
                                            <div className="progress">
                                                <div className="progress-bar" role="progressbar" 
                                                        style={{width: `${data.stats[2].base_stat}%`}} 
                                                        aria-valuenow="75" 
                                                        aria-valuemin="0" 
                                                        aria-valuemax="100"
                                                    >
                                                    <small>{data.stats[2].base_stat}</small>
                                                </div>
                                            </div> 
                                        </div>
                                    </div>
                                    <div className="row align-items-center">
                                        <Text className="col-10 col-md-3">
                                             Special-Attack
                                        </Text>
                                        <div className="col-12 col-md-9">
                                            <div className="progress">
                                                <div className="progress-bar" role="progressbar" 
                                                        style={{width: `${data.stats[3].base_stat}%`}} 
                                                        aria-valuenow="75" 
                                                        aria-valuemin="0" 
                                                        aria-valuemax="100"
                                                    >
                                                    <small>{data.stats[3].base_stat}</small>
                                                </div>
                                            </div> 
                                        </div>
                                    </div>
                                    <div className="row align-items-center">
                                        <Text className="col-10 col-md-3">
                                            Special-Defense
                                        </Text>
                                        <div className="col-12 col-md-9">
                                            <div className="progress">
                                                <div className="progress-bar" role="progressbar" 
                                                        style={{width: `${data.stats[4].base_stat}%`}} 
                                                        aria-valuenow="75" 
                                                        aria-valuemin="0" 
                                                        aria-valuemax="100"
                                                    >
                                                    <small>{data.stats[4].base_stat}</small>
                                                </div>
                                            </div> 
                                        </div>
                                    </div>
                                    <div className="row align-items-center">
                                        <Text className="col-10 col-md-3">
                                            Speed
                                        </Text>
                                        <div className="col-12 col-md-9">
                                            <div className="progress">
                                                <div className="progress-bar" role="progressbar" 
                                                        style={{width: `${data.stats[5].base_stat}%`}} 
                                                        aria-valuenow="75" 
                                                        aria-valuemin="0" 
                                                        aria-valuemax="100"
                                                    >
                                                    <small>{data.stats[5].base_stat}</small>
                                                </div>
                                            </div> 
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-3">
                                <div className="col">
                                    <div className="col align-items-center ">
                                        <Title>Moves</Title>
                                        <Move>
                                        {pokemonMoves.map((moves) => {
                                         return(
                                            <Text>{moves.move.name
                                                .substring(0,1)
                                                .toUpperCase()
                                                .concat(moves.move.name.substring(1))}
                                            </Text>
                                            )
                                         })}
                                         </Move>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                )
               })}
        </Container>
    )
}

export default DetailPage;