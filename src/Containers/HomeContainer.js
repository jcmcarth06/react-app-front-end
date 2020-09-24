import React from 'react';
import Rules from '../Components/Rules.js'

class HomeContainer extends React.Component{

    constructor() {
        super()
        this.state = {
          toggled: false
        }
    }

    handleClick = () => {
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
                <h1>Hinky Pinky!</h1>
                <h2>Welcome to Hinky Pinky! A rhyming word game where you can create or solve clues to word puzzles based on syllables, rhymes, and logic.</h2>
                <button onClick={this.handleClick}>{this.state.toggled ? "Hide Rules" : "Show Rules"}</button>
                {toggled ? <Rules /> : <h1></h1>}
            </div>
        )
    }
};

export default HomeContainer;