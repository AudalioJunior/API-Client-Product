import { Product } from "../../entity/Product";
import ProductRepository from "../../repository/ProductRepository/ProductRepository";
import IUpdateProductUseCase from "./IUpdateProductUseCase";

export default class UpdateProductUseCase implements IUpdateProductUseCase{
    private productRepository = new ProductRepository();
    
    async execute(product: Product, id: any) {
        try {
            const productDb = await this.productRepository.update(product, id);
            return productDb       
        } catch (error) {
            return error;
        }
    }
}