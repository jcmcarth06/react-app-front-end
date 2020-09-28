import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import HomeContainer from './Containers/HomeContainer.js';
import PuzzlesContainer from './Containers/PuzzlesContainer.js';
import CreatePuzzleContainer from './Containers/CreatePuzzleContainer.js';
import PuzzleShowContainer from './Containers/PuzzleShowContainer.js';

//switch statement between two routes: '/' and '/puzzles'

const App = (props) => {
  return (
    <Router>
      <div className="App">
      <Route exact path='/' component={HomeContainer} />
      <Route exact path='/puzzles' component={PuzzlesContainer} />
      <Route exact path='/createpuzzle' component={CreatePuzzleContainer} />
      <Route path='/puzzles/:id' component={PuzzleShowContainer} />
      </div>
    </Router>
  );
};

export default App;
