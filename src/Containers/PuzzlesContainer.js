import React from 'react';
import PuzzlesCardContainer from '../Components/PuzzleCardContainer';
import { connect } from 'react-redux'
import fetchPuzzles from '../Actions/PuzzleActions'

class PuzzlesContainer extends React.Component{

    state = {displayPuzzles: this.props.puzzles}

    componentDidMount() {
        this.props.fetchPuzzles()
    }

    filterBySyllables(num) {
        if (num) {
            console.log(num);
            this.setState({
                displayPuzzles: this.props.puzzles.filter(puzzle => puzzle.attributes.number_of_syllables === num)
            })
        } else {
            this.setState({
                displayPuzzles: this.props.puzzles
            })
        }
    };

    render() {
        if (this.props.isLoading) {
            return <h1> Loading</h1>
        }
        return (
            <div>
                <h1>Puzzles:</h1>
                <button onClick={() => { this.filterBySyllables(1) }}>Hink Pinks</button>
                <button onClick={() => { this.filterBySyllables(2) }}>Hinky Pinkies</button>
                <button onClick={() => { this.filterBySyllables(3) }}>Hinkety Pinketies</button>
                <button onClick={() => { this.filterBySyllables() }}>All Puzzles</button>
                <PuzzlesCardContainer
                    puzzles={this.state.displayPuzzles}
                />
            </div>
        )
    }
}


export default connect(state => state, {fetchPuzzles})(PuzzlesContainer);