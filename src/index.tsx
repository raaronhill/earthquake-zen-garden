import * as React from 'react';
import {render} from "react-dom";
import "./index.css";
import {Page} from "./Page";
import {BrowserRouter} from "react-router-dom";

const App = () => {

  return (<Page dataSource={"./earthquakeData.json"} />)
};

render(<BrowserRouter><App /></BrowserRouter>, document.getElementById("root"));