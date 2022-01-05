import { MOVIE_TYPE } from "../../utils/config/contants";

const initialState = {
    movies: [],
    movieDetail: {},
}

const MovieReducer = (state = initialState, action) => {
    switch (action.type) {
        case MOVIE_TYPE.GET_ALL_MOVIES_BY_STATUS_AND_CATEGORY: {
            return { ...state, movies: action.movies }
        }

        case MOVIE_TYPE.GET_MOVIE_DETAIL: {
            return {...state, movieDetail: action.movieDetail}
        }

        default:
            return state
    }
}

export default MovieReducer;