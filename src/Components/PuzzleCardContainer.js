import React from 'react';
import PuzzleCard from './PuzzleCard.js'

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
            {puzzles}
        </div>
    )
}

export default PuzzleCardContainer;