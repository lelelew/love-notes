import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import Adapters from "next-auth/adapters";
// const typeorm = require("typeorm");
// const { Entity, PrimaryGeneratedColumn, Column } = typeorm;

@Entity("messages")
export class Message extends Adapters.TypeORM.Models.Message.model {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: "bigint",
    name: "user_id",
  })
  userId: string;

  @Column({
    type: "varchar",
  })
  text: string;

  @Column({
    type: "date",
  })
  date: string;

  @Column({
    type: "smallint",
  })
  time: number;

  @Column({
    type: "boolean",
  })
  sent: boolean;

  @Column({
    type: "timestamp",
    name: "created_at",
  })
  createdAt: string;

  @Column({
    type: "timestamp",
    name: "updated_at",
  })
  updatedAt: string;
}

export const MessageSchema = {
  name: "Message",
  target: Message,
  columns: {
    ...Adapters.TypeORM.Models.Message.schema.columns,
    // Adds a phoneNumber to the User schema
    // phoneNumber: {
    //   type: "varchar",
    //   nullable: true,
    // },
  },
};
