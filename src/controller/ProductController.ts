import { Request, Response } from "express";
import UpdateClientUseCase from "../useCases/Client/UpdateClientUseCase";
import CreateProductUseCase from "../useCases/Products/CreateProductUseCase";
import DeleteProductUseCase from "../useCases/Products/DeleteProductUseCase";
import FindProductUseCase from "../useCases/Products/FindProductUseCase";
import UpdateProductUseCase from "../useCases/Products/UpdateProductUseCase";

export class ProductController{
    private createProductUseCase = new CreateProductUseCase();
    private findProductUseCase = new FindProductUseCase();
    private updateProductUseCase = new UpdateProductUseCase();
    private deleteProductUseCase = new DeleteProductUseCase();


    async getAll(req: Request , res: Response){
        try {
            const result = await this.findProductUseCase.execute();
            return res.json({products: result})
        } catch (error) {
            return res.status(400).json({error: "Error ao buscar os produtos!"})
        }
    }

    async create(req: Request, res: Response){
        try {
            const data = req.body;
            const result = await this.createProductUseCase.execute(data);
            return res.json({message: "Produto cadastrado com sucesso!", product: result});
        } catch (error) {
            return res.status(400).json({error: "Error ao cadastrar o Produto!"});
        }
    }

    async updated(req: Request, res: Response){
        try {
            let id = req.params.id;
            let data = req.body;
            await this.updateProductUseCase.execute(data, id);
            return res.json({message: "Produto atualizado com sucesso!"});
        } catch (error) {
            return res.status(400).json({error: "Error ao atualizar o Produto!"})
        }
    }
    
    async delete(req: Request, res: Response){
        try {
            let id = req.params.id;
            await this.deleteProductUseCase.execute(id);
            return res.json({message: "Produto deletado com sucesso!"});
        } catch (error) {
            return res.status(400).json({error: "Error ao deletar o produto!"});
        }
    }
}