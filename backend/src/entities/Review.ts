import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";
import { User } from "./User";
import { Book } from "./Book";

@Entity()
export class Review {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @ManyToOne(() => User, (u) => u.reviews, { eager: true })
  user!: User;

  @ManyToOne(() => Book, { eager: true })
  book!: Book;

  @Column({ type: "text" })
  text!: string;

  @Column({ type: "int", default: 0 })
  rating!: number;

  @Column({ type: "int", default: 0 })
  likesCount!: number;

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;
}
