import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column({
      name: "email_verified"
    })
    emailVerified: boolean;

    @Column({
      name: "phone_number"
    })
    phoneNumber: string;

    @Column({
      name: "phone_number_verified"
    })
    phoneNumberVerified: boolean;

}