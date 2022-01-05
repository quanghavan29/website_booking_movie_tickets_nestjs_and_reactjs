import {
    Body,
    Controller,
    Delete,
    Get,
    Logger,
    Param,
    Post,
    Put,
    UseGuards,
    Req,
    UseInterceptors,
    ClassSerializerInterceptor,
} from '@nestjs/common';
import { AuthGuard, Roles, RolesGuard, RoleType } from '../../security';
import { PageRequest, Page } from '../../domain/base/pagination.entity';
import { UserDTO } from '../../service/dto/user.dto';
import { HeaderUtil } from '../../client/header-util';
import { Request } from 'express';
import { LoggingInterceptor } from '../../client/interceptors/logging.interceptor';
import { ApiBearerAuth, ApiUseTags, ApiResponse, ApiOperation } from '@nestjs/swagger';
import { MovieService } from '../../service/movie.service';
import { MovieDTO } from '../../service/dto/movie.dto';

@Controller('api/movie')
@UseInterceptors(LoggingInterceptor, ClassSerializerInterceptor)
@ApiUseTags('movie-resource')
export class MovieController {
    logger = new Logger('MovieController');

    constructor(private readonly movieService: MovieService) {}

    @Post('/create')
    @UseGuards(AuthGuard, RolesGuard)
    @ApiBearerAuth()
    @Roles(RoleType.ADMIN)
    @ApiOperation({ title: 'Create new movie' })
    @ApiResponse({
        status: 201,
        description: 'The record has been successfully created.',
        type: MovieDTO,
    })
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    async createMovie(@Body() movieDTO: MovieDTO): Promise<MovieDTO | undefined> {
        const movieCreated = await this.movieService.save(movieDTO);

        return movieCreated;
    }

    @Get('/search-all')
    @ApiOperation({ title: 'Get the list of movies' })
    @ApiResponse({
        status: 200,
        description: 'List all movies',
        type: MovieDTO,
    })
    async getAllMoviesByStatusAndCategory(@Req() req: Request): Promise<MovieDTO[] | undefined> {
        let {status, categoryId} = req.query;
        const result = await this.movieService.searchByStatusAndCategory(status, categoryId);

        return result;
    }

    @Get('/detail/:movieId')
    @Roles(RoleType.ADMIN)
    @ApiOperation({ title: 'Get movie detail' })
    @ApiResponse({
        status: 200,
        description: 'The found record',
        type: UserDTO,
    })
    async getUser(@Param('movieId') movieId: number): Promise<MovieDTO | undefined> {
        return await this.movieService.findById(movieId);
    }

}
