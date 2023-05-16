import { useEffect,useState } from "react";
import { Container, Table } from "react-bootstrap";

function ViewForm() {

    const [formFields, setFormFields] = useState([]);

    useEffect(() => {
        fetch('http://localhost:4000/jsonform', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            setFormFields([...data]);
        })
        .catch((error) => {
            console.error('Error:', error);
            alert("Erro ao Criar Formulário");
        });
    }, []);

  return (
    <Container>
      <h1 className="mt-3">View Form</h1>
      <Table striped bordered hover className="mt-4">
        <thead>
          <tr>
            <th>Id</th>
            <th>Json Name</th>
            <th>Original Json</th>
            <th>New Json</th>
          </tr>
        </thead>
        <tbody>
          {formFields.map((input, i) => {
              return (
                <tr key={i}>
                    <td>{input.id}</td>
                    <td>{input.JsonName}</td>
                    <td><code>{JSON.stringify(input.OriginalValues)}</code></td>
                    <td><code>{JSON.stringify(input.NewValues)}</code></td>
                </tr>
              );
          })}
        </tbody>
      </Table>
    </Container>
  );
}

export default ViewForm;
