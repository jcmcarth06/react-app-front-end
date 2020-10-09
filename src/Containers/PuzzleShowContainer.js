import React from 'react';
import { Link } from "react-router-dom";
import Correct from '../Components/Correct.js'
import Incorrect from '../Components/Incorrect.js'
import { connect } from 'react-redux'
import { fetchPuzzle } from '../Actions/PuzzleActions'

class PuzzleShowContainer extends React.Component{

    constructor(props) {
        super(props)
        this.state = {
            input: '',
            correct: 0
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount(){
        if (!this.props.puzzles.length){
            this.props.fetchPuzzle(this.props.match.params.id)
        }
    }
    
    handleInputChange = event => {
        console.log(this.state);
        this.setState({
          input: event.target.value,
        });
      };

    handleSubmit = (e) => {
        e.preventDefault();
        const solution = this.props.puzzles[0].attributes.solution
        const { input } = this.state;
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
        if (this.props.puzzles.length) {
            const puzzle = this.props.puzzles.find((puzzle) => puzzle.id === this.props.match.params.id)

            return (
                <div class="puzzleShowDiv">
                    <h1>{puzzle.attributes.question}</h1>
                    <form onSubmit={this.handleSubmit}>
                        <label>
                        Your Guess?
                        <input type="text" value={this.state.value} onChange={this.handleInputChange} />
                        </label>
                        <input class="buttons" type="submit" value="Submit" />
                        <Link class="buttons" to="/">Home</Link>
                        <Link class="buttons" to="/puzzles">Back</Link> 
                    </form>
                    {correct && <Correct />}
                    {incorrect && <Incorrect />}
                </div>
            )
        } else {
            return ( 
            <h1>Loading</h1>
            )
        }
        
    }
}


export default connect(state => state, {fetchPuzzle})(PuzzleShowContainer);
