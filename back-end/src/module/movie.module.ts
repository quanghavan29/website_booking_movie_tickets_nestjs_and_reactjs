import { Module } from '@nestjs/common';
import { MovieController } from '../web/rest/movie.controller';
import { ManagementController } from '../web/rest/management.controller';
import { MovieRepository } from '../repository/movie.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MovieService } from '../service/movie.service';

@Module({
    imports: [TypeOrmModule.forFeature([MovieRepository])],
    controllers: [MovieController, ManagementController],
    providers: [MovieService],
    exports: [MovieService],
})
export class MovieModule {}
