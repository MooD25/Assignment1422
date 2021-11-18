
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from "../pages/Home.js";
import ProdListing from "../pages/ProdListing.js";
import ProdCatPage from "../pages/ProdCatPage.js";
import RegPage from "../pages/RegPage.js";
import LogPage from "../pages/LogPage.js";
import ProdDetailPage from "../pages/ProdDetailPage.js";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//import BestSeller from "./BestSeller";
//import ProdCat from "./ProdCat";

const App = () => {



  return (
    <>

      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route exact path="/prodlisting">
            <ProdListing />
          </Route>

          <Route exact path="/cat/:category">
            <ProdCatPage />
          </Route>

          <Route exact path="/registration">
            <RegPage />
          </Route>

          <Route exact path="/login">
            <LogPage />
          </Route>

          <Route exact path="/productDetail/:id">
            <ProdDetailPage />
          </Route>
        </Switch>
      </Router>
    </>
  )
}

export default App;