import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../domain/user.entity';
import { UserDTO } from './dto/user.dto';
import { UserMapper } from './mapper/user.mapper';
import { UserRepository } from '../repository/user.repository';
import { FindManyOptions, FindOneOptions, Like } from 'typeorm';
import { transformPassword } from '../security';
import { MovieRepository } from '../repository/movie.repository';
import { MovieDTO } from './dto/movie.dto';
import { MovieMapper } from './mapper/movie.mapper';
import { Category } from 'src/domain/category.entity';

@Injectable()
export class MovieService {
    constructor(@InjectRepository(MovieRepository) private movieRepository: MovieRepository) { }

    async save(movieDTO: MovieDTO): Promise<MovieDTO | undefined> {
        const newMovie = MovieMapper.fromDTOtoEntity(movieDTO);
        const result = await this.movieRepository.save(newMovie);

        return MovieMapper.fromEntityToDTO(result);
    }

    async findAll(options: FindManyOptions<MovieDTO>): Promise<MovieDTO[] | undefined> {
        const result = await this.movieRepository.find(options);
        const moviesDTO: MovieDTO[] = [];
        result.forEach(movie => moviesDTO.push(MovieMapper.fromEntityToDTO(movie)));

        return moviesDTO;
    }


    async findById(id: number): Promise<MovieDTO | undefined> {
        const result = await this.movieRepository.findOne({
            relations: ["categories"],
            where: {
                id: id
            }
        });

        return MovieMapper.fromEntityToDTO(result);
    }


    async searchByStatusAndCategory(status: string, categoryId: number): Promise<MovieDTO[] | undefined> {
        const result = await this.movieRepository.find({
            relations: ["categories"],
            where: {
                status: Like(`%${status}%`),
            }
        });

        let moviesDTO: MovieDTO[] = []

        // if category has selected
        if (categoryId == -1) {
            result.forEach(movie => moviesDTO.push(MovieMapper.fromEntityToDTO(movie)));
        } else {
            result.forEach(movie => {
                let index = movie.categories.findIndex(category => category.id == categoryId);
                if (index !== -1) {
                    moviesDTO.push(MovieMapper.fromEntityToDTO(movie));
                }
            })
        }

        return moviesDTO;
    }
}
