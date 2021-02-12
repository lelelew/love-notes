import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("messages")
export class Message {
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
