import FormView from "./formView";
import DataListView from "./dataListView";
import { Container, Row, Col } from "react-bootstrap";

import runFetchAPI from "../services/runFetchAPI";
import InfoAlert from "../services/alertService";
import { useEffect, useState } from "react";

import FormExample from './deneme';

const MainComponent = () => {
  const [postResponce, setPostResponce] = useState("");
  const [getResponse, setGetResponse] = useState("");

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [postResponce]);

  const fetchData = async () => {
    try {
      setGetResponse(await runFetchAPI("GET"));
    } catch (error) {
      InfoAlert("FetchAPI cannot GET data");
    } finally {
      console.log(getResponse);
    }
  };

  const handleSubmit = async (values) => {
    
    let fetchAPIResponse = "";
    const data = JSON.stringify(values);
    console.log("Form values " + data);
    try {
      fetchAPIResponse = await runFetchAPI("POST", data);
      setPostResponce(fetchAPIResponse);
    } catch (error) {
      InfoAlert("FetchAPI cannot POST your form data");
    } finally {
      console.log(fetchAPIResponse);
    }
  };

  return (
    <Container className="container-fluid">
      <Row className="justify-content-md-center">
        <Col sm={6}>
         <FormView formSubmit={handleSubmit} />
        </Col>
        <Col sm={6}>
          <DataListView data={getResponse} />
        </Col>
      </Row>
    </Container>
  );
};

export default MainComponent;
