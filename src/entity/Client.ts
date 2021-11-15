import {Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, CreateDateColumn, UpdateDateColumn} from "typeorm";
import { Address } from "./Address";

@Entity()
export class Client {

    @PrimaryGeneratedColumn()
    id: number;

    @CreateDateColumn({ name: "created_at" })
    createdAt: Date;

    @UpdateDateColumn({ name: "updated_at" })
    updatedAt: Date;

    @Column()
    name: string;

    @Column()
    phone: string;

    @Column()
    cpf: string;

    @OneToOne(type => Address, clientAddress => Client, {eager: true})
    @JoinColumn({name: "address_id"})
    address: Address;
}
