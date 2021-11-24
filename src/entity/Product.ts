import { Column, CreateDateColumn, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Request } from "./Request";

@Entity()
export class Product {

    @PrimaryGeneratedColumn()
    id: number;

    @CreateDateColumn({ name: "created_at" })
    createdAt: Date;

    @UpdateDateColumn({ name: "updated_at" })
    updatedAt: Date;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    value: number;

    @Column()
    quantity: number;

    @OneToOne(type => Request, productRequest => Request, {eager: true})
    @JoinColumn({name: "request_id"})
    request: Request;
}