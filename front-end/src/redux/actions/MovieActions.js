import { movieService } from "../../services/movie.service";
import { MOVIE_TYPE } from "../../utils/config/contants";

export const getAllMoviesByStatusAndCategory = (status, categoryId) => {
    return async (dispatch) => {
        try {
            const { data } = await movieService.getAllMoviesByStatusAndCategory(status, categoryId);
            dispatch({
                type: MOVIE_TYPE.GET_ALL_MOVIES_BY_STATUS_AND_CATEGORY,
                movies: data,
            })
        } catch (error) {
            console.log("Error Get All Movies By Status And Category!");
        }
    }
}

export const getMovieDetail = (movieId) => {
    return async (dispatch) => {
        try {
            const { data } = await movieService.getMovieDetail(movieId);
            console.log(data);
            dispatch({
                type: MOVIE_TYPE.GET_MOVIE_DETAIL,
                movieDetail: data,
            })
        } catch (error) {
            console.log("Error Get Movie Detail!");
        }
    }
}