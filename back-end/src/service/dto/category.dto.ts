import { ApiModelProperty } from "@nestjs/swagger";
import { BaseDTO } from "./base.dto";
import { MovieDTO } from "./movie.dto";

export class CategoryDTO extends BaseDTO {
    @ApiModelProperty({ example: 'Hành Động', description: 'Category Name', required: false })
    name?: string;

    @ApiModelProperty({
        isArray: true,
        description: 'Array of movies',
        required: false,
    })
    movies?: MovieDTO[];
}