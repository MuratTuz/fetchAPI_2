import FormView from "./formView";
import DataListView from "./dataListView";
import { Container, Row, Col } from "react-bootstrap";

import {getEmployeeService, postEmployeeService} from "../services/employee-service";
import InfoAlert from "../services/alertService";
import { useEffect, useState } from "react";

import { Link, Route, Switch } from "react-router-dom";

import Navigation from './navigation';


const MainComponent = () => {
  const [postResponce, setPostResponce] = useState("");
  const [getResponse, setGetResponse] = useState("");

  useEffect(() => {
    postResponce && getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [postResponce]);

  const getData = async () => {
    try {
      setGetResponse(await getEmployeeService());
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
      fetchAPIResponse = await postEmployeeService(values);
      setPostResponce(fetchAPIResponse);
    } catch (error) {
      InfoAlert("FetchAPI cannot POST your form data");
    } finally {
      console.log(fetchAPIResponse);
    }
  };

  return (
    <>
      <header className="App-header">
      <Navigation/>
      </header>
      <main>
        <Switch>
          <Route path="/post" >
             <FormView formSubmit={handleSubmit} />
          </Route>
          <Route path="/get"> 
           <DataListView data={getResponse} />
           </Route>
        </Switch>
      </main>
    </>

  );
};

export default MainComponent;
