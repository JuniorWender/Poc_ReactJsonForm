import { Container } from "react-bootstrap";
import CustomSelect from "./CustomSelect";

function InputForm({ create, inputNumber, labelTitle, inputType, inputName, inputPlaceholder, inputMask}){

    const createForm = ["Tipo Do Input", "Nome Do Campo", "Placeholder", "Mascara"];
    const complement = ["", "Nome Na Tag HTML", "O Placeholder Do Campo", ""];

    const inputsList = [{name:"--", value:""}, {name:"Text", value:"text"}, {name:"Number", value:"number"}, {name:"Password", value:"password"}, {name:"Email", value:"email"}, {name:"Date", value:"date"}];
    const maskList = [{name:"--", value:""}, {name: "CPF", value: "999.999.999-99"}, {name: "CPNJ", value: "99.999.999/9999-99"}, {name: "Telefone", value: "(99) 99999-9999"}, {name: "Data", value: "99/99/9999"}];

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
                                        <CustomSelect inputList={inputsList} />
                                    </>
                                        : null
                                }
                                {newCreateForm[index] === "Mascara" ? 
                                    <>
                                        <label className="mt-2">{`${newCreateForm[index]}:`}</label> 
                                        <CustomSelect inputList={maskList} />
                                    </>
                                        : null
                                }
                                {newCreateForm[index] !== "Tipo Do Input" && newCreateForm[index] !== "Mascara" ?
                                    <>
                                        <label className="mt-2">{`${newCreateForm[index]}:`}</label>
                                        <input className="d-flex" type="text" name={newCreateForm[index]} placeholder={newComplement[index]} />
                                    </> 
                                        : null
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