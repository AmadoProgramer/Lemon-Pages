import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";
import { User } from "./User";

@Entity()
export class Book {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column()
  title!: string;

  @Column({ nullable: true })
  author?: string;

  @Column({ nullable: true })
  isbn?: string;

  @Column({ nullable: true })
  coverUrl?: string;

  @Column({ type: "text", nullable: true })
  description?: string;

  @ManyToOne(() => User, (user) => user.books, { eager: true, onDelete: "SET NULL" })
  createdBy?: User; 

  @CreateDateColumn()
  createdAt!: Date;
}
