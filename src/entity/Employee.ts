import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { BuySale } from "./BuySale";

@Entity()
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

    @OneToMany(() => BuySale, (buysale) => buysale.employee)
    buysales: BuySale[];
} 