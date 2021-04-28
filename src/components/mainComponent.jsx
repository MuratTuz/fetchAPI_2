import FormView from "./formView";
import DataListView from "./dataListView";
import { Container, Row, Col } from "react-bootstrap";

import runFetchAPI from "../services/runFetchAPI";
import InfoAlert from "../services/alertService";
import { useEffect, useState } from "react";

const MainComponent = () => {
  const [postResponce, setPostResponce] = useState("");
  const [getResponse, setGetResponse] = useState("");

  useEffect(() => {
    postResponce && fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [postResponce]);

  const fetchData = async () => {
    try {
      setGetResponse(await runFetchAPI("GET"));
    } catch (error) {
      InfoAlert("FetchAPI cannot POST your form data");
    } finally {
      console.log(getResponse);
    }
  };

  const handleSubmit = async (values) => {
    // const data = new FormData(values);
    let fetchAPIResponse = "";
    console.log("Form values " + values);
    try {
      fetchAPIResponse = await runFetchAPI("POST", values);
      setPostResponce(fetchAPIResponse);
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
          <DataListView data={getResponse} />
        </Col>
      </Row>
    </Container>
  );
};

export default MainComponent;
