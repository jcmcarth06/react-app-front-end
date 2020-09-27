import React from 'react';
import { Link } from "react-router-dom";

const PuzzleCard = (props) => {
    return(
        <div>
            <Link to={"/puzzles/" + props.id}>{props.question}</Link> 
        </div>
    )
}

export default PuzzleCard;