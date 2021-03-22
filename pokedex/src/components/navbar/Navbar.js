import Container from './styles'

function Navbar(props){

    const Button = () => {
        switch(props.title){
            case('Home'):
            return(
                <button>Ver minha pokedex</button>
            )
            case('Pokedex'):
            return(
                <button>Voltar para a lista de pokemons</button>
            )
            case('Detail'):
            return(
                <button>Voltar</button>
            )
            default:
                return(
                    <div></div>
                )
        }
    }
    const Button2 = () => {
        switch(props.title){
            case('Detail'):
            return(
                <button>Adicionar/Remover da pokedex</button>
            )
            default:
                return(
                    <div></div>
                )
        }
    }

    return(
        <Container>
            <Button/>
            Navbar
            <Button2/>
        </Container>
    )
}

export default Navbar;