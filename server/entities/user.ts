import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
// const typeorm = require("typeorm");
// const { Entity, PrimaryGeneratedColumn, Column } = typeorm;

@Entity("users")
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
      type: "varchar"
    })
    name: string;

    @Column({
      type: "varchar"
    })
    email: string;

    @Column({
      type: "boolean",
      name: "email_verified"
    })
    emailVerified: boolean;

    @Column({
      type: "varchar",
      name: "phone_number"
    })
    phoneNumber: string;

    @Column({
      type: "boolean",
      name: "phone_number_verified"
    })
    phoneNumberVerified: boolean;

}