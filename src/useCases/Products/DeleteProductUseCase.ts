import ProductRepository from "../../repository/ProductRepository/ProductRepository";
import IDeleteProductUseCase from "./IDeleteProductUseCase";

export default class DeleteProductUseCase implements IDeleteProductUseCase{
    private productRepository = new ProductRepository();
    
    async execute(id: any) {
        try {
            await this.productRepository.delete(id)
            return  
        } catch (error) {
            return error
        }
    }
}