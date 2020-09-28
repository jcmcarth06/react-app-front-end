import React from 'react';
import PuzzlesCardContainer from '../Components/PuzzleCardContainer';

class PuzzlesContainer extends React.Component{
    constructor() {
        super()
        this.state = {
          isLoaded: false,
          puzzles: [],
          displayPuzzles: []
        }
        this.filterBySyllables = this.filterBySyllables.bind(this);
    }

    componentDidMount() {
        fetch("http://localhost:3000/puzzles")
        .then(res => res.json())
        .then((result) => {
            console.log(result.data)
                this.setState({
                    isLoaded: true,
                    puzzles: result.data,
                    displayPuzzles: result.data
                });
            })
    }

    filterBySyllables(num) {
        if (num) {
            console.log(num);
            this.setState({
                displayPuzzles: this.state.puzzles.filter(puzzle => puzzle.attributes.number_of_syllables === num)
            })
        } else {
            this.setState({
                displayPuzzles: this.state.puzzles
            })
        }
    };

    render() {
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


export default PuzzlesContainer;