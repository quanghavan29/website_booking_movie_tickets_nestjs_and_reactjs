import { PrimaryGeneratedColumn, Column } from 'typeorm';

export abstract class BaseEntity {
    @PrimaryGeneratedColumn()
    id?: number;

    @Column({ nullable: true, default: "Anonymous" })
    createdBy?: string;
    @Column({ nullable: true, type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    createdDate?: Date;
    @Column({ nullable: true, default: "Anonymous" })
    lastModifiedBy?: string;
    @Column({ nullable: true, type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    lastModifiedDate?: Date;
}
