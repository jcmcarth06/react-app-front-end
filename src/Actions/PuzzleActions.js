const baseURL = "http://localhost:3000/puzzles"

export default function fetchPuzzles() {
    return (dispatch) => {
        dispatch({type:'FETCHING_PUZZLES'})
        fetch(baseURL)
        .then(res => res.json())
        .then((puzzles) => {
            dispatch({type:'FETCH_PUZZLES', payload: puzzles.data})
        })
    }
}



// export const addPuzzle = (puzzle) => (( type: "ADDED_PUZZLE", payload: puzzle))