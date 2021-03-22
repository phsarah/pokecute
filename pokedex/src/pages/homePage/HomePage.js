import React from "react";
import Navbar from '../../components/navbar/Navbar'
import PokemonCard from '../../components/pokemonCard/PokemonCard'
import {ContainerGrid} from './styles'

function HomePage(){
    return(
        <div>
            <Navbar title="Home"/>
            <ContainerGrid>
                <PokemonCard title="Home"/>

            </ContainerGrid>

        </div>
    )
}

export default HomePage;