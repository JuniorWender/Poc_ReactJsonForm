import { useState } from "react";

import { Container,Button } from "react-bootstrap";
import InputForm from "../layout/InputForm";
import { Link } from "react-router-dom";

function CreateForm(){
    const provisorio = {};
    const json = [];
    var url = "";

    const [ inputNumber, setInputNumber] = useState();

    function handleChange(e) {
        setInputNumber(e.target.value);
    }

    function formSubmit(e) {
        e.preventDefault();
        const form = e.target.length -1;
        for (let i = 0; i < form; i++) {
            // if(e.target[i].name != "mascara")
            //     provisorio.push(e.target[i].value);
            json.push(e.target[i].value);
            // if(e.target[i].name == "mascara")
        }

        // var jsonFile = JSON.stringify({form : json});
        // var blob = new Blob([jsonFile], {type: "application/json"});
        // var url = URL.createObjectURL(blob);

        var file = new File([JSON.stringify({form : json})], "form.json", {type: "text/plain;charset=utf-8"});
        url = window.URL.createObjectURL(file);
        debugger

        console.log(JSON.stringify({form : json}));
        console.log(provisorio);
        console.log(json);

    }

    return(
        <Container>
            <h1 className="mt-4">Criar Form</h1>
            <label>Selecione Quantos Campos Terá Seu Formulário:</label>
            <select className="d-flex mt-2" onChange={handleChange}>
                <option value="">--</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
            {inputNumber > 0 &&
                <form onSubmit={formSubmit} className="mt-2">
                    <InputForm create={true} inputNumber={inputNumber} />
                    <a href={url} download="form.json" target="_blank"> 
                        <Button className="mt-3" type="submit" variant="dark">Criar Json</Button>
                    </a>
                </form>
            }
        </Container>
    );
}

export default CreateForm;