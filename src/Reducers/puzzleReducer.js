export default function puzzleReducer(state = {puzzles: [], isLoading: true}, action) {
    switch (action.type) {
        case "FETCH_PUZZLES":
            return {...state, isLoading: false, puzzles: action.payload}
        case "FETCHING_PUZZLES":
            return {...state, isLoading: true}
        case "ADD_PUZZLE":
            return {...state, puzzles: [...state.puzzles, action.payload.attributes]}
        default:
            return state
    }
}