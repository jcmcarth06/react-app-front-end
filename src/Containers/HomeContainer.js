import React from 'react';
import Rules from '../Components/Rules.js'
import PuzzlesContainer from './PuzzlesContainer.js'

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
            <div>
                <PuzzlesContainer />
                <h1>Hinky Pinky!</h1>
                <h2>Welcome to Hinky Pinky! A rhyming word game where you can create or solve clues to word puzzles based on syllables, rhymes, and logic.</h2>
                <button onClick={this.handleRulesClick}>{this.state.toggled ? "Hide Rules" : "Show Rules"}</button>
                <button>Puzzles</button>  {/* this will be inside of a link tag, not a button; import link component from reactRouter DOM */}
                {toggled && <Rules />}
            </div>
        )
    }
};

export default HomeContainer;