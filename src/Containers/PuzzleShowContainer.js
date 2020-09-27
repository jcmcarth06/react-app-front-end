import React from 'react';
import { Link } from "react-router-dom";

class PuzzleShowContainer extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            solution: this.props.history.location.state.solution,
            question: this.props.history.location.state.question,
            input: ''
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
        const { solution, input } = this.state;
        // perform all neccassary validations
        if (input !== solution) {
            alert("INCORRECT");
        } else {
            alert("CORRECT")
        }
    }

    render() {
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
            </div>
        )
    }
}

export default PuzzleShowContainer;