import styled from 'styled-components'


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
    border: 2px solid #E8E8E8;
    background-color: #E8E8E8;
    box-shadow: 10px 30px 35px;
`

export const HeaderIndex = styled.div`
    position: relative;
    border-bottom: 2px solid #E8E8E8;
    background-color: #E8E8E8;   
    width: 35vh;
    height: 48px;
    padding: 10px 10px 5px 10px;
    border-radius: 15px 15px 0px 0px;
    border-bottom: 1px solid #D3D3D3;
    font-size: 18px;
    font-weight: bold;

`

export const CardBody = styled.div`
    display: flex;
    flex-direction: column;
    background-color: white;
    align-items: center;
    width: 100%;
    border-radius: 20px;
`