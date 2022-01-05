import { BaseService } from "./base/base.service";

export class MovieService extends BaseService {
    // eslint-disable-next-line no-useless-constructor
    constructor() {
        super();
    }

    getAllMoviesByStatusAndCategory = (status, categoryId) => {
        return this.get(`movie/search-all?status=${status}&categoryId=${categoryId}`);
    }

    getMovieDetail = (movieId) => {
        return this.get(`movie/detail/${movieId}`);
    }
}

export const movieService = new MovieService();