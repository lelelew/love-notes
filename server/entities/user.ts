import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import Adapters from "next-auth/adapters";
// const typeorm = require("typeorm");
// const { Entity, PrimaryGeneratedColumn, Column } = typeorm;

@Entity("users")
export class User extends Adapters.TypeORM.Models.User.model {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: "varchar",
  })
  name: string;

  @Column({
    type: "varchar",
  })
  email: string;

  @Column({
    type: "boolean",
    name: "email_verified",
  })
  emailVerified: boolean;

  @Column({
    type: "varchar",
    name: "phone_number",
  })
  phoneNumber: string;

  @Column({
    type: "boolean",
    name: "phone_number_verified",
  })
  phoneNumberVerified: boolean;
}

export const UserSchema = {
  name: "User",
  target: User,
  columns: {
    ...Adapters.TypeORM.Models.User.schema.columns,
    // Adds a phoneNumber to the User schema
    phoneNumber: {
      type: "varchar",
      nullable: true,
    },
  },
};
