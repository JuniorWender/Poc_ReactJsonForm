import { Container } from "react-bootstrap";

function Home() {

    return (
        <div>
            <Container>
                <h1> Home </h1>
                <p> Bem-vindo Ao JsonForm Creator Poc </p>
                <p> Como Utilizar: </p>
                <ul>
                    <li> Para <strong>Visualizar</strong> O Formulário Vá Até a Página "Formulário" e importe um arquivo JSON. </li>
                    <li> Para <strong>Adicionar</strong> Um Novo Formulario, Vá Até a Pasta Json e Crie Um Novo Json que possua um array de inputs chamado <strong>form</strong> </li>
                </ul>
            </Container>
        </div>
    );
  }
  
  export default Home;