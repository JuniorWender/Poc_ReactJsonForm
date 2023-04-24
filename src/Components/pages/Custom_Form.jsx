import { useState } from "react";

import { Container,Button } from "react-bootstrap";
import InputMask from 'react-input-mask';

function Custom_Form() {
    const [formFields, setFormFields] = useState();
    let fileReader;

    function formsubmit(e){
        e.preventDefault();
        console.log(e.target[0].value);
        // console.log(e.target[1].value);
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