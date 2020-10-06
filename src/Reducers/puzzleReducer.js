export default function puzzleReducer(state = {puzzles: [], isLoading: true}, action) {
    switch (action.type) {
        case "FETCH_PUZZLES":
            return {...state, isLoading: false, puzzles: action.payload}
        case "FETCHING_PUZZLES":
            return {...state, isLoading: true}
        default:
            return state
    }
}