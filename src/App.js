import './App.css';
import React from 'react'
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"

import Navbar from "./components/navbar.component";

import EditExercise from "./components/edit-exercise.component";
import CreateExercise from "./components/create-exercise.component";
import CreateUser from "./components/create-user.component";
import exerciseListComponent from './components/exerciseListComponent';

function App() {
  return (
    <Router>
      <Navbar />
      <br />
      <Switch>
      <Route exact path="/" component={exerciseListComponent} />
      <Route path="/edit/:id"  component={EditExercise} />
      <Route path="/create" component={CreateExercise} />
      <Route path="/user"  component={CreateUser} />
      </Switch>
    </Router>
  );
}

export default App;
