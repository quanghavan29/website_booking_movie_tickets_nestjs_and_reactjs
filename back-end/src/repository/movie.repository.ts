import { Movie } from '../domain/movie.entity';
import { EntityRepository, getManager, Repository } from 'typeorm';

@EntityRepository(Movie)
export class MovieRepository extends Repository<Movie> {}
