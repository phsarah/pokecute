import styled from 'styled-components'


export const Container = styled.div`
    background-color: rgba(255, 0, 0, 0.9);
    height: 100vh;

`

export const DetailsContainer = styled.div`
    display: flex;
    column-gap: 15px;
    margin-top: 20px;
    margin-left: 200px;
    margin-right: 200px;

`

export const SpritesContainer = styled.div`
    display: flex;
    flex-direction: column;
`

export const SpritesFront = styled.div`
    display: flex;
    flex-direction: column;
    width: 120px;
    margin: 100px;
    background-color: white;
    border-radius: 25px;
`

export const SpritesBack = styled.div`
    display: flex;
    flex-direction: column;
    width: 120px;
    margin-left: 100px;
    background-color: white;
    border-radius: 25px;
`

export const StatsContainer = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 40px;
    padding-left: 10px;
    width: 300px;
    border-left: 1px solid rgba(255, 0, 0, 0.9);
    border-right: 1px solid rgba(255, 0, 0, 0.9);
    background-color: white;
    border-radius: 30px;

`
export const TypesMoveContainer = styled.div`
    background-color: white;
    border-radius: 30px;
`

export const TypesContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 300px;
    padding-left: 10px;
    border-radius: 30px;
    row-gap: 30px;

`
export const Title =  styled.h1`
    font-size: 28px;
    font-weight: lighter;
    border-bottom: 1px solid #EE3B3B;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif

`
export const MovesContainer = styled.div`
    width: 300px;
    height: 600px;
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
    padding-left: 10px;
    border-left: 1px solid #EE3B3B;
    background-color: white;
    border-radius: 30px;
    row-gap: 15px;


`
export const Text = styled.p`
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;

`


