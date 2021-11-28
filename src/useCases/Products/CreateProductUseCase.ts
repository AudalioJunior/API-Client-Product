import { Product } from "../../entity/Product";
import ProductRepository from "../../repository/ProductRepository/ProductRepository";
import ICreateProductUseCase from "./ICreateProductUseCase";

export default class CreateProductUseCase implements ICreateProductUseCase{
    private productRepository = new ProductRepository();

    async execute(product: Product) {
        try {
            const productDb: Product = await this.productRepository.create(product);
            return productDb; 
        } catch (error) {
            return error
        }
    }
}