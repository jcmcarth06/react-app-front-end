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

export function addPuzzle(puzzle){
    const configObj = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({puzzle: puzzle})
    }

    return (dispatch) => {
        fetch(baseURL, configObj)
            .then(res => res.json())
            .then(puzzle => {
                dispatch({type: 'ADD_PUZZLE', payload: puzzle})
            })
    }
}
