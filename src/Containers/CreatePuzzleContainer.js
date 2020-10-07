import React from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { addPuzzle } from '../Actions/PuzzleActions'


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
        const puzzle = {
            question: this.state.question,
            solution: this.state.solution,
            numberOfSyllables: this.state.numberOfSyllables
        }

        this.props.addPuzzle(puzzle)
        this.setState({
            question: '',
            solution: '',
            numberOfSyllables: 0,
        })
        this.props.history.push('/puzzles');
    };

    render() {
        return (
            <div>
                <h1>Create a Puzzle:</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Question:
                    <input type="text" value={this.state.value} onChange={this.handleQuestionChange} />
                    </label><br></br>
                    <label>
                        Solution:
                    <input type="text" value={this.state.value} onChange={this.handleSolutionChange} />
                    </label><br></br>
                    <label>
                        Number of Syllables Per Word:
                    <input type="number" value={this.state.value} onChange={this.handleNumberOfSyllablesChange} />
                    </label><br></br>
                    <input type="submit" value="Submit" />
                    <Link to="/">Home</Link>
                    <Link to="/puzzles">Back</Link> 
                </form>
            </div>
        )
    }
}


export default connect(null, { addPuzzle })(CreatePuzzleContainer);