import React from 'react';
import PuzzlesCardContainer from '../Components/PuzzleCardContainer';

class PuzzlesContainer extends React.Component{
    constructor() {
        super()
        this.state = {
          isLoaded: false,
          puzzles: []
        }
    }

    componentDidMount() {
        fetch("http://localhost:3000/puzzles")
        .then(res => res.json())
        .then((result) => {
            console.log(result.data)
                this.setState({
                    isLoaded: true,
                    puzzles: result.data
                });
            })
    }

    render() {
        return (
            <div>
                <h1>Puzzles:</h1>
                <PuzzlesCardContainer
                    puzzles={this.state.puzzles}
                />
            </div>
        )
    }
}


export default PuzzlesContainer;