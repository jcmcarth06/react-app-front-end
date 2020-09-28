import React from 'react';
import { Link } from "react-router-dom";

class CreatePuzzleContainer extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            question: '',
            solution: '',
            numberOfSyllables: 0
        }
        this.handleQuestionChange = this.handleQuestionChange.bind(this);
        this.handleSolutionChange = this.handleSolutionChange.bind(this);
        this.handleNumberOfSyllablesChange = this.handleNumberOfSyllablesChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleQuestionChange = event => {
        console.log(this.state);
        this.setState({
          question: event.target.value,
        });
    };

    handleSolutionChange = event => {
        console.log(this.state);
        this.setState({
          solution: event.target.value,
        });
    };

    handleNumberOfSyllablesChange = event => {
        console.log(this.state);
        this.setState({
          numberOfSyllables: event.target.value,
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        let createPuzzleConfig = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                "question": this.state.question,
                "solution": this.state.solution,
                "number_of_syllables": this.state.numberOfSyllables
            })
        };
        fetch("http://localhost:3000/puzzles", createPuzzleConfig)
        .then(response => response.json())
    };

    render() {
        return (
            <div>
                <h1>Create a Puzzle:</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Question:
                    <input type="text" value={this.state.value} onChange={this.handleQuestionChange} />
                    </label>
                    <label>
                        Solution:
                    <input type="text" value={this.state.value} onChange={this.handleSolutionChange} />
                    </label>
                    <label>
                        Number of Syllables:
                    <input type="number" value={this.state.value} onChange={this.handleNumberOfSyllablesChange} />
                    </label>
                    <input type="submit" value="Submit" />
                    <Link to="/">Home</Link>
                    <Link to="/puzzles">Back</Link> 
                </form>
            </div>
        )
    }
}

export default CreatePuzzleContainer;