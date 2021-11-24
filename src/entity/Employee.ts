import { Column, CreateDateColumn, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { BuySale } from "./BuySale";

export class Employee{

    @PrimaryGeneratedColumn()
    id: number;

    @CreateDateColumn({ name: "created_at" })
    createdAt: Date;

    @UpdateDateColumn({ name: "updated_at" })
    updatedAt: Date;

    @Column()
    name: string;

    @Column()
    cpf: string;

    @Column()
    phone: string;

    // @OneToMany(() => BuySale, (buysale) => buysale.employee)
    // buysales: BuySale[];
} 