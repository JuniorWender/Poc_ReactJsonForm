import { Container,Button } from "react-bootstrap";
import JsonFile  from "../../Json/teste.json";

function Custom_Form() {

    function formsubmit(e){
        e.preventDefault();
        console.log(e.target[0].value);
        console.log(e.target[1].value);
    }

    return (
        <Container>
            <h1>Custom Form</h1>
            <form onSubmit={formsubmit}>
            {JsonFile.form.map((item,i) => {
                return (
                    <div key={i}>
                        <label className="d-flex mt-2">{item.name}</label>
                        <input type={item.type} id={item.name} name={item.name} placeholder={item.placeholder} />
                    </div>
                );
            })}
            <Button className="mt-3" type="submit" variant="dark">Submit</Button>
            </form>
        </Container>
    );
  }
  
  export default Custom_Form;