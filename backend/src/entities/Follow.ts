import { Entity, PrimaryGeneratedColumn, ManyToOne, CreateDateColumn } from "typeorm";
import { User } from "./User";

@Entity()
export class Follow {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @ManyToOne(() => User, { eager: true })
  follower!: User;

  @ManyToOne(() => User, { eager: true })
  followee!: User;

  @CreateDateColumn()
  createdAt!: Date;
}
