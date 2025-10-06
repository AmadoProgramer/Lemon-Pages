import { Entity, PrimaryGeneratedColumn, ManyToOne, CreateDateColumn } from "typeorm";
import { User } from "./User";
import { Review } from "./Review";

@Entity()
export class Like {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @ManyToOne(() => User, { eager: true })
  user!: User;

  @ManyToOne(() => Review, { eager: true })
  review!: Review;

  @CreateDateColumn()
  createdAt!: Date;
}
