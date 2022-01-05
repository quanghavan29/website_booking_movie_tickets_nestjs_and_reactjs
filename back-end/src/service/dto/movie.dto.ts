import { ApiModelProperty } from "@nestjs/swagger";
import { BaseDTO } from "./base.dto";
import { CategoryDTO } from "./category.dto";

/**
 * An Movie DTO object.
 */
 export class MovieDTO extends BaseDTO {
    @ApiModelProperty({ example: 'SPIDER MAN: NO WAY HOME', description: 'Movie Name', required: false })
    name?: string;

    @ApiModelProperty({ example: 'Background Intorduction URL', description: 'Background Intorduction URL', required: false })
    backgroundIntroUrl?: string;

    @ApiModelProperty({ example: 'ID Video Trailer', description: 'ID Video Trailer', required: false })
    trailer?: string;

    @ApiModelProperty({ example: 'Poster URL', description: 'Poster URL', required: false })
    poster?: string;

    @ApiModelProperty({ example: 'Coming Soon', description: 'Movie Status', required: false })
    status?: string;

    @ApiModelProperty({ example: '01/01/2022', description: 'Movie Premire', required: false })
    premiere?: Date;

    @ApiModelProperty({ example: 'Trailer "Spider-Man: No Way Home" bắt đầu bằng cảnh cuộc sống của Peter Parker hoàn toàn đảo lộn.', description: 'Movie Description', required: false })
    description?: string;

    @ApiModelProperty({ example: 'Tom Holland, Zendaya, Benedict Cumberbatch, Jacob Batalon, Jon Favreau', description: 'Actors Name', required: false })
    actors?: string;

    @ApiModelProperty({ example: 'Jon Watts', description: 'Directors Name', required: false })
    directors?: string;

    @ApiModelProperty({ example: 'C16 - PHIM CẤM KHÁN GIẢ DƯỚI 16 TUỔI', description: 'Movie Rate', required: false })
    rated?: string;

    @ApiModelProperty({ example: 'Tiếng Anh - Phụ đề Tiếng Việt', description: 'Movie Language', required: false })
    language?: string;

    @ApiModelProperty({ example: '149', description: 'Movie Time Limit', required: false })
    timeLimit?: number;

    @ApiModelProperty({
        isArray: true,
        description: 'Array of movie categories',
        required: false,
    })
    categories?: CategoryDTO[];

}