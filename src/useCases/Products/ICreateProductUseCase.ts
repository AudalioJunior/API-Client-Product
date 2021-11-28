import { Product } from "../../entity/Product";

export default interface ICreateProductUseCase {
    execute(product: Product)
}