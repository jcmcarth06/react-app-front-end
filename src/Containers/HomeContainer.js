import React from 'react';
import Rules from '../Components/Rules.js'
import PuzzlesContainer from './PuzzlesContainer.js'
import { Link } from "react-router-dom";
  

class HomeContainer extends React.Component{

    constructor() {
        super()
        this.state = {
          toggled: false
        }
    }

    handleRulesClick = () => {
        this.setState(previousState => {
            return {
                toggled: !previousState.toggled
            }
        })
    }

    render() {
        let { toggled } = this.state;
        return (
            <div class="homeDiv">
                <h1>Hinky Pinky!</h1>
                <h2>Welcome to Hinky Pinky! A rhyming word game where you can create or solve clues to word puzzles based on syllables, rhymes, and logic.</h2>
                <button class="buttons" onClick={this.handleRulesClick}>{this.state.toggled ? "Hide Rules" : "Show Rules"}</button>
                <Link class="buttons" to="/puzzles">Puzzles</Link> 
                {toggled && <Rules />}
            </div>
        )
    }
};

export default HomeContainer;