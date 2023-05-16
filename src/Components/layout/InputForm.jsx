import { Container } from "react-bootstrap";

function InputForm({ create, labelTitle, inputType, inputName, inputPlaceholder, inputMask}){
    const createForm = ["Tipo Do Input", "Nome Do Campo", "Placeholder", "Mascara"];
    const complemento = ["text/number...", "Nome Na Tag HTML", "O Placeholder Do Campo", "Tipo da Mascara (CNPJ, CPF, Telefone, Data, etc...)"]

    return(
        <Container>
            {/* <label>{labelTitle}</label>
            <input type={inputType} name={inputName} placeholder={inputPlaceholder} mask={inputMask} /> */}
            <label>{labelTitle}</label>
            <input type={inputType} name={inputName} placeholder={inputPlaceholder} mask={inputMask} />
            {create === true &&
                createForm.map((element,key) => {
                    <div key={key}>
                        <label>{element[key]}</label>
                        <input type="text" placeholder={complemento[key]} />
                    </div>
                })
            }
        </Container>
    );
}

export default InputForm;