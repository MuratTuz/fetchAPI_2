import { Form, Button } from "react-bootstrap";

import useFetchAPI from "../services/useFetchAPI";
import { InfoAlert } from "../services/alertService";

const FormView = () => {

  const handleSubmit = async (event) => {
    event.preventDefault();
    let fetchAPIResponse = "";
    console.log("Your favorite flavor is: " + event.target.value);
    try {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      fetchAPIResponse = await useFetchAPI(event.target.value, "POST");
    } catch (error) {
      InfoAlert("FetchAPI cannot POST your form data");
    } finally {
      console.log(fetchAPIResponse);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formFirstName">
        <Form.Label>First Name</Form.Label>
        <Form.Control type="text" placeholder="First Name" />
      </Form.Group>
      <Form.Group controlId="formLastName">
        <Form.Label>Last Name</Form.Label>
        <Form.Control type="text" placeholder="Last Name" />
      </Form.Group>
      <Form.Group controlId="formGender">
        <Form.Label>Gender</Form.Label>
        <Form.Control type="text" placeholder="Gender" />
      </Form.Group>
      <Form.Group controlId="formBirthday">
        <Form.Label>Birthday</Form.Label>
        <Form.Control type="text" placeholder="Birthday" />
      </Form.Group>
      <Form.Group controlId="formEmail">
        <Form.Label>Email</Form.Label>
        <Form.Check type="email" placeholder="Email" />
      </Form.Group>
      <Form.Group controlId="formPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group controlId="formAboutme">
        <Form.Label>About me</Form.Label>
        <Form.Check type="text" placeholder="About me" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
    </Button>
    </Form>
  );
}

export default FormView;
