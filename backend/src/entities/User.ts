import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from "typeorm";
import { Review } from "../entities/Review";
import { Follow } from "../entities/Follow";
import { Book } from "./Book";


@Entity()
export class User {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column({ nullable: true })
  name?: string;

  @Column({ unique: true })
  email!: string;

  @Column()
  passwordHash!: string;

  @Column({ nullable: true })
  bio?: string;

  @Column({ nullable: true })
  avatarUrl?: string;

  @OneToMany(() => Review, (r) => r.user)
  reviews?: Review[];

  @OneToMany(() => Follow, (f) => f.follower)
  following?: Follow[];

  @OneToMany(() => Follow, (f) => f.followee)
  followers?: Follow[];

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;

  @OneToMany(() => Book, (book) => book.createdBy)
  books?: Book[];

}
