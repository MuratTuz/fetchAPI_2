import FormView from "./formView";
import DataListView from "./dataListView";
import { Container, Row, Col } from "react-bootstrap";

import runFetchAPI from "../services/runFetchAPI";
import { InfoAlert } from "../services/alertService";
import { useEffect, useState } from "react";



const MainComponent = () => {
    
    const [POSTResponse, setPOSTResponse] = useState('');
    const [GETResponse, setGETResponse] = useState('');


    useEffect( () => {
        fetchData();
    },[POSTResponse])

    const fetchData = async() => {
        setGETResponse(await runFetchAPI("GET"));
    }

const handleSubmit = async (event) => {
  event.preventDefault();
  let fetchAPIResponse = "";
  console.log("Your favorite flavor is: " + event.target.value);
  try {
    setPOSTResponse(await runFetchAPI(event.target.value, "POST"));
  } catch (error) {
    InfoAlert("FetchAPI cannot POST your form data");
  } finally {
    console.log(fetchAPIResponse);
  }
};

    return (
        <Container>
            <Row>
                <Col>
                    <FormView formSubmit={handleSubmit} />
                </Col>
                <Col>
                    <DataListView data={GETResponse}/>
                </Col>
            </Row>
        </Container>
    );
}

export default MainComponent;
