import { useState } from "react";

import { Container,Button } from "react-bootstrap";
import JsonFile  from "../../Json/teste.json";

function Custom_Form() {
    const [formFields, setFormFields] = useState();
    const [formOk, setformOk] = useState(false);
    let fileReader;
    let content;

    function formsubmit(e){
        e.preventDefault();
        console.log(e.target[0].value);
        console.log(e.target[1].value);
    }

    function FileReadersubmit(e){
        e.preventDefault();
        setformOk(true);
    }

    function handleFileRead () {
        content = fileReader.result;
        console.log(content);
        // setFormFields(content);
        // console.log(formFields);
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
            <form onSubmit={FileReadersubmit}>
                <input className="mt-3" type="file" id="file" onChange={e => handleFileChosen(e.target.files[0])} accept=".json" required/>
                <Button className="mt-3 d-flex" type="submit" variant="primary">Submit</Button>
            </form>
            {formOk  &&
                <form onSubmit={formsubmit}>
                    <h4 className="mt-4">Formulário Criado Com Json</h4>
                    {content.form.map((item,i) => {
                        return (
                            <div key={i}>
                                <label className="d-flex mt-2">{item.name}</label>
                                <input type={item.type} id={item.name} name={item.name} placeholder={item.placeholder} required/>
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