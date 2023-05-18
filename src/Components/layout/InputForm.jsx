import { Container } from "react-bootstrap";

function InputForm({ create, inputNumber, labelTitle, inputType, inputName, inputPlaceholder, inputMask}){

    const createForm = ["Tipo Do Input", "Nome Do Campo", "Placeholder", "Mascara"];
    const complement = ["text/number...", "Nome Na Tag HTML", "O Placeholder Do Campo", "Mascara (CNPJ, CPF, Tel)"]

    function formValidator(){
        if(create === true){
            let newCreateForm = [];
            let newComplement = [];
            for (let copyRepeat = 0; copyRepeat < inputNumber ; copyRepeat++) {
                for (let arrayIndex = 0; arrayIndex < createForm.length; arrayIndex++) {
                    newCreateForm.push(createForm[arrayIndex]);
                    newComplement.push(complement[arrayIndex]);
                }
             }
            return (
                <div className="d-flex flex-wrap ">
                    {newCreateForm.map((form, index) => {
                        return(
                            <div className="d-inline-block w-25 mb-3" key={index}>
                                {newCreateForm[index] === "Tipo Do Input" ? 
                                    <>
                                        <label className="mt-2">{`${newCreateForm[index]}:`}</label> 
                                        <input className="d-flex" required type="text" name={newCreateForm[index]} placeholder={newComplement[index]} mask={inputMask} />
                                    </>
                                        :
                                    <>
                                        <label className="mt-2">{`${newCreateForm[index]}:`}</label>
                                        <input className="d-flex" type="text" name={newCreateForm[index]} placeholder={newComplement[index]} mask={inputMask} />
                                    </>
                                }
                            </div>
                        );
                    })}
                </div>
            );
        }
        else {
            return (
                <div>
                    <label>{labelTitle}</label>
                    <input type={inputType} name={inputName} placeholder={inputPlaceholder} mask={inputMask} />
                </div>
            );
        }
    }

    return (
        <Container>
            {formValidator()}
        </Container>
    );
}

export default InputForm;