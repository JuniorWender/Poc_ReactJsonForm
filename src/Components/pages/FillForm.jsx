import { useState } from "react";

import { Container,Button } from "react-bootstrap";
import InputMask from 'react-input-mask';

function FillForm() {
    
    const [formFields, setFormFields] = useState();
    const [originalJson, setOriginalJson] = useState("");
    const [jsonName, setJsonName] = useState("");
    
    let contador = 0;
    let newJson = {};
    let fileReader;

    function formsubmit(e){
        let i = 0;
        while(i <= contador){
            newJson[e.target[i].name] = e.target[i].value;
            i++;
        }
        
        fetch('http://localhost:4000/jsonform', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: 
            JSON.stringify({
                JsonName: jsonName,
                OriginalValues: originalJson,
                NewValues : newJson
            }),
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            alert("Formulário Criado Com Sucesso");
        })
        .catch((error) => {
            console.error('Error:', error);
            alert("Erro ao Criar Formulário");
        });
    }

    function handleFileRead () {
        var content = fileReader.result;
        setOriginalJson(JSON.parse(content));
        setFormFields(JSON.parse(content).form);
    }

    function handleFileChosen (file) {
        setJsonName(file.name);
        fileReader = new FileReader();
        fileReader.onloadend = handleFileRead;
        fileReader.readAsText(file);        
    }

    return (
        <Container>
            <h1>Preencher Form</h1>
            <h4 className="mt-4">Adicione o Arquivo Json</h4>
                <input className="mt-3" type="file" id="file" onChange={e => handleFileChosen(e.target.files[0])} accept=".json" required/>
            {formFields  &&
                <form onSubmit={formsubmit}>
                    <h4 className="mt-4">Formulário Criado Com Json</h4>
                    {formFields.map((item,i) => {
                        contador = i;
                        return (
                            <div key={i}>
                                <label className="d-flex mt-2">{item.name}</label>
                                <InputMask  mask={item.mask} type={item.type} id={item.name} name={item.name} placeholder={item.placeholder} required/>
                            </div>
                        );
                    })}
                    <Button className="mt-3" type="submit" variant="dark">Submit</Button>
                </form>
            }
        </Container>
    );
  }
  
  export default FillForm;