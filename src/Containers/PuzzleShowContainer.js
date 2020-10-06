import React from 'react';
import { Link } from "react-router-dom";
import Correct from '../Components/Correct.js'
import Incorrect from '../Components/Incorrect.js'
import Button from 'react-bootstrap/Button'

class PuzzleShowContainer extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            solution: this.props.history.location.state.solution,
            question: this.props.history.location.state.question,
            input: '',
            correct: 0
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange = event => {
        console.log(this.state);
        this.setState({
          input: event.target.value,
        });
      };

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state)
        const { solution, input } = this.state;
        // perform all neccassary validations
        if (input.toLowerCase() === solution.toLowerCase()) {
            this.setState({
                correct: 1
            });
        } else {
            this.setState({
                correct: -1
            });
        }
    }

    render() {
        let correct;
        let incorrect;

        if (this.state.correct === 1) {
            correct = true
            incorrect = false
        }
        if (this.state.correct === -1) {
            incorrect = true
            correct = false
        }

        return (
            <div>
                <h1>{this.state.question}</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>
                    Your Guess?
                    <input type="text" value={this.state.value} onChange={this.handleInputChange} />
                    </label>
                    <input type="submit" value="Submit" />
                    <Link to="/">Home</Link>
                    <Link to="/puzzles">Back</Link> 
                </form>
                {correct && <Correct />}
                {incorrect && <Incorrect />}
            </div>
        )
    }
}

export default PuzzleShowContainer;