import ProductRepository from "../../repository/ProductRepository/ProductRepository";
import IFindProductUseCase from "./IFindProductUseCase";

export default class FindProductUseCase implements IFindProductUseCase{
    private productRepository = new ProductRepository()
    execute() {
        try {
            const results = this.productRepository.getAll()
            return results;
        } catch (error) {
            return error
        }
    }
}