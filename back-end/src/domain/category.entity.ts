import { Column, Entity, JoinTable, ManyToMany } from "typeorm";
import { BaseEntity } from "./base/base.entity";
import { Movie } from "./movie.entity";

@Entity('category')
export class Category extends BaseEntity {
    @Column({ nullable: true })
    name?: string;

    @ManyToMany(() => Movie, movie => movie.categories)
    @JoinTable({name: "movie_category"})
    movies?: Movie[];
}