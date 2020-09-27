import React from 'react';

const PuzzleCard = (props) => {
    return(
        <div>
            <a href={"/puzzles/" + props.id}>{props.question}</a> 
        </div>
    )
}

export default PuzzleCard;