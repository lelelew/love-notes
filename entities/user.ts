import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    email_verified: boolean;

    @Column()
    phone_number: number;

    @Column()
    phone_number_verified: boolean;

}