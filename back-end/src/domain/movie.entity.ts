import { Column, Entity, JoinTable, ManyToMany } from "typeorm";
import { BaseEntity } from "./base/base.entity";
import { Category } from "./category.entity";

@Entity('movie')
export class Movie extends BaseEntity {
    @Column({ nullable: true })
    name?: string;

    @Column("longtext", { nullable: true })
    backgroundIntroUrl?: string;

    @Column("longtext", { nullable: true })
    trailer?: string;

    @Column("longtext", { nullable: true })
    poster?: string;

    @Column({ nullable: true })
    status?: string;

    @Column({ nullable: true })
    premiere?: Date;

    @Column("longtext", { nullable: true })
    description?: string;

    @Column("longtext", { nullable: true })
    actors?: string;

    @Column({ nullable: true })
    directors?: string;

    @Column({ nullable: true })
    rated?: string;

    @Column({ nullable: true })
    language?: string;

    @Column({ nullable: true })
    timeLimit?: number;

    @ManyToMany(() => Category, category => category.movies)
    @JoinTable({name: "movie_category"})
    categories?: Category[];
}