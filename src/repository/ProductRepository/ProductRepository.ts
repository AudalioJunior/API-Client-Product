import { getRepository } from "typeorm";
import { Product } from "../../entity/Product";
import IProductRepository from "./IProductRepository";

export default class ProductRepository implements IProductRepository{

    private ormRepository = getRepository(Product);

    async getAll(): Promise<Product[]> {
        try {
            const productsDB = await this.ormRepository.createQueryBuilder('product')
            .getMany()
            return productsDB
        } catch (error) {
            return error
        }
    }

    async create(product: Product) {
        try {
            const productDB = await this.ormRepository.save(product);
            return productDB;
        } catch (error) {
            return error;
        }
    }

    async update(product: Product, id: any) {
        try {
            const productDB = await this.ormRepository.update(id, product);
            return productDB
        } catch (error) {
            return error;
        }
    }
    async delete(id: string) {
        try {
            const productDB = await this.ormRepository.createQueryBuilder("product")
            .delete()
            .where("id = :id", {id: id})
            .execute();
            return productDB
        } catch (error) {
            return error;
        }
    }
}