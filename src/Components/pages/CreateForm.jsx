import { useRef, useState } from "react";

import { Container } from "react-bootstrap";
import InputForm from "../layout/InputForm";

function CreateForm(){
    // const number = useRef(null);

    const [ inputNumber, setInputNumber] = useState();

    function handleChange(e) {
        setInputNumber(e.target.value);
        // if (inputNumber > 4) {
        //     setInputNumber(number.current.value);
        // }
    }

    // function moreThenFour() {
    //     setInputNumber(number.current.value);
    //     console.log('inputNumber: ',inputNumber);
    // }

    return(
        <Container>
            <h1 className="mt-4">Create Form</h1>
            <label>Selecione Quantos Campos Terá Seu Formulário:</label>
            <select className="d-flex mt-2" onChange={handleChange}>
                <option value="">--</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
            {/* {inputNumber === "mais" &&
                <div>
                    <label className="mt-3">Entre com a quantidade de campos:</label>
                    <input type="number" ref={number} className="d-flex mt-2 "/>
                    <button className="btn btn-primary mt-2" onClick={moreThenFour}>Enviar</button>
                </div>
            } */}
            {
                <InputForm create={true} />

            }
        </Container>
    );
}

export default CreateForm;