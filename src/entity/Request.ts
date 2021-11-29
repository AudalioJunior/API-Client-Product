import { Column, CreateDateColumn, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { BuySale } from "./BuySale";
import { Product } from "./Product";

@Entity()
export class Request{
    @PrimaryGeneratedColumn()
    id: number;

    @CreateDateColumn({ name: "created_at" })
    createdAt: Date;

    @UpdateDateColumn({ name: "updated_at" })
    updatedAt: Date;

    @Column()
    quantity: number;

    @OneToMany(() => Product, (product) => product.request)
    products: Product[];

    @OneToOne(type => BuySale, requestBuySale => BuySale, {eager: true})
    @JoinColumn({name: "buySale_id"})
    buySale: BuySale;

    @OneToOne(type => Product, productRequest => Product, {eager: true})
    @JoinColumn({name: "product_id"})
    product: Product;
}