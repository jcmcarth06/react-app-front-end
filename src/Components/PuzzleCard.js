import React from 'react';
import { Link } from "react-router-dom";

const PuzzleCard = (props) => {
    return(
        <div>
            <Link class="linkStyle" to={{
                pathname: '/puzzles/' + props.id,
                state: {
                    question: props.question,
                    solution: props.solution
                }
            }}>{props.question}</Link>
        </div>
    )
}

export default PuzzleCard;