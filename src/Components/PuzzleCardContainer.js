import React from 'react';
import PuzzleCard from './PuzzleCard.js'
import { Link } from "react-router-dom";

const PuzzleCardContainer = (props) => {
    console.log(props)
    let puzzles = props.puzzles.map(puzzle => {
        return(
            <PuzzleCard
                key={puzzle.id}
                id={puzzle.id}
                question={puzzle.attributes.question}
                solution={puzzle.attributes.solution}
            />
        )
    })
    return (
        <div className="PuzzleCardsContainer">
            {puzzles}<br></br>
            <Link to="/createpuzzle">Create a Puzzle</Link>
        </div>
    )
}

export default PuzzleCardContainer;