import { useState } from "react";

import { Container,Button } from "react-bootstrap";
import InputMask from 'react-input-mask';

function Custom_Form() {
    const [formFields, setFormFields] = useState();
    let contador = 0;
    let fileReader;

    function formsubmit(e){
        let i = 0;
        e.preventDefault();
        debugger
        console.log(
            JSON.stringify({
                form: formFields,
                data: e.target[0].value
            })
        );
        while(i < contador){
            console.log(e.target[i].name,": ",e.target[i].value);
            i++;
        }
        // jsonName: true,
        // newValues: true,
        // originalValues: formFields,

        // fetch('http://localhost:4000/api/jsonForms', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify({
        //         form: formFields,
        //         data: e.target
        //     }),
        // })
        // .then(response => response.json())
        // .then(data => {
        //     console.log('Success:', data);
        //     alert("Formulário Criado Com Sucesso");
        // })
        // .catch((error) => {
        //     console.error('Error:', error);
        //     alert("Erro ao Criar Formulário");
        // });
    }

    function handleFileRead () {
        var content = fileReader.result;
        setFormFields(JSON.parse(content).form);
    }

    function handleFileChosen (file) {
        fileReader = new FileReader();
        fileReader.onloadend = handleFileRead;
        fileReader.readAsText(file);        
    }

    return (
        <Container>
            <h1>Custom Form</h1>
            <h4 className="mt-4">Adicione o Arquivo Json</h4>
                <input className="mt-3" type="file" id="file" onChange={e => handleFileChosen(e.target.files[0])} accept=".json" required/>
            {formFields  &&
                <form onSubmit={formsubmit}>
                    <h4 className="mt-4">Formulário Criado Com Json</h4>
                    {formFields.map((item,i) => {
                        contador = contador + i;
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
  
  export default Custom_Form;