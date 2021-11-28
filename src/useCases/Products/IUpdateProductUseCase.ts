import { Product } from "../../entity/Product";

export default interface IUpdateProductUseCase{
    execute(product: Product, id: any)
}