import { Container } from "react-bootstrap";

function Home() {

    return (
        <div>
            <Container>
                <h1> Home </h1>
                <p> Bem-vindo Ao JsonForm Creator Poc </p>
                <p> Como Utilizar: </p>
                <ul>
                    <li> Para <strong>Visualizar</strong> O Formulário Vá Até a Página "Formulário" e Verá o Mesmo Criado Dinamicamente </li>
                    <li> Para <strong>Trocar</strong> O Formulário Vá Até O Componente Custom_Form e Altere o Import Do Json </li>
                    <li> Para <strong>Adicionar</strong> Um Novo Formulario, Vá Até a Pasta Json e Crie Um Novo Json e Adicione a Essa Pasta </li>
                </ul>
            </Container>
        </div>
    );
  }
  
  export default Home;