import { Product } from "../../entity/Product";

export default interface IProductRepository{
    getAll(): Promise<Product[]>;
    create(product: Product);
    update(product: Product, id: any);
    delete(id: string);
}