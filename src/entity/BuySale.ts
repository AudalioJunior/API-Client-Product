import { Column, CreateDateColumn, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Client } from "./Client";
import { Employee } from "./Employee";
import { Product } from "./Product";
import { Request } from "./Request";

@Entity()
export class BuySale{

    @PrimaryGeneratedColumn()
    id: number;

    @CreateDateColumn({ name: "created_at" })
    createdAt: Date;

    @UpdateDateColumn({ name: "updated_at" })
    updatedAt: Date;

    @Column()
    date: Date;

    @Column()
    payment: string;

    @Column()
    totalValue: number;

    @OneToOne(type => Client, clientBuySale => BuySale, {eager: true})
    @JoinColumn({name: "client_id"})
    client: Client;

    @OneToOne(type => Employee, employeeBuySale => BuySale, {eager: true})
    @JoinColumn({name: "employee_id"})
    employee: Employee; 

    @OneToMany(() => Request, (request) => request.buySale)
    request: Request[];
}