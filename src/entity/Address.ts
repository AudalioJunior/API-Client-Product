import {Entity, PrimaryGeneratedColumn, Column, OneToOne, CreateDateColumn, UpdateDateColumn} from "typeorm";
import { Client } from "./Client";

@Entity()
export class Address {

    @PrimaryGeneratedColumn()
    id: number;

    @CreateDateColumn({ name: "created_at" })
    createdAt: Date;

    @UpdateDateColumn({ name: "updated_at" })
    updatedAt: Date;

    @Column()
    state: string;

    @Column()
    city: string;

    @Column()
    district: string;
    
    @Column()
    street: string;

    @Column()
    cep: string;

    @OneToOne(type => Client, address => Address)
    clientAddress: Client
}
