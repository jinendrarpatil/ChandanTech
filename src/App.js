import React from "react";
import Home from "./components/Homepage/Home";
import Company from "./components/CompanyPage/Company";
import Services from "./components/ServicesPage/Services";
import Projects from "./components/ProjectsPage/Projects";
import Career from "./components/CareerPage/Career";
import Contact from "./components/ContactPage/Contact";
import {Route,Switch} from "react-router-dom";

const App = () => {
  return (
    <>
    <Switch>
    <Route path="/" exact component={Home}/>
    <Route path="/company" component={Company}/>
    <Route path="/services" component={Services}/>
    <Route path="/projects" component={Projects}/>
    <Route path="/career" component={Career}/>
    <Route path="/contact" component={Contact}/>
    </Switch>   
   </>
   )
}
 
export default App;