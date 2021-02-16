import React from 'react'
import Header from "./Header";
import Products from "./Listofproducts";
import Loading from './Loading';
import Details from "./Details";
import Cart from './Cart'
import About from "./About";
import Contact from "./Contact";
import Error from "./Error";
import { useGlobe } from "./Context";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";

function App() {
  const {loading} = useGlobe();
  return (
    <div className="App">
      <Router>
        <Header/>
        {
          loading ? <Loading /> : 
          <Switch>
          <Route exact path='/'>
            <Products/>
          </Route>
          <Route path='/details/:idd' children={<Details />}></Route>
          <Route path='/cart'>
            <Cart/>
          </Route>
          <Route path='/about'>
            <About/>
          </Route>
          <Route path='/contact'>
            <Contact/>
          </Route>
          <Route path='*'>
            <Error/>
          </Route>
          </Switch>
        }
      </Router>
    </div>
  );
}

export default App;
