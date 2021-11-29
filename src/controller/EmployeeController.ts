import { Request, Response } from "express";
import BuySaleEmployeeUseCase from "../useCases/Employee/BuySaleEmployeeUseCase";
import CreateEmployeeUseCase from "../useCases/Employee/CreateEmployeeUseCase";
import FindEmployeeUseCase from "../useCases/Employee/FindEmployeeUseCase";
import DeleteProductUseCase from "../useCases/Products/DeleteProductUseCase";
import UpdateProductUseCase from "../useCases/Products/UpdateProductUseCase";

export class EmployeeController{
    private createEmployeeUseCase = new CreateEmployeeUseCase();
    private findEmployeeUseCase = new FindEmployeeUseCase();
    private updateEmployeeUseCase = new UpdateProductUseCase();
    private deleteEmployeeUseCase = new DeleteProductUseCase();
    private buySaleUseCase = new BuySaleEmployeeUseCase();

    async getAll(req: Request, res: Response){
        try {
            const result = await this.findEmployeeUseCase.execute();
            return res.json({employee: result})
        } catch (error) {
            return error
        }
    }

    async create(req: Request, res: Response){
        try {
            const data = req.body;
            const result = await this.createEmployeeUseCase.execute(data);
            return res.json({message: "Funcionário cadastrado com sucesso!", employee: result})
        } catch (error) {
            return res.status(400).json({error: "Error ao cadastrar o funcionário!"})
        }
    }

    async updated(req: Request, res: Response){
        try {
            let id = req.params.id;
            let data = req.body;
            await this.updateEmployeeUseCase.execute(data, id);
            return res.json({message: "Funcionário atualizado com sucesso!"})
        } catch (error) {
            return res.status(400).json({error: "Error ao atualizar o funcionário"})
        }
    }
    async delete(req: Request, res: Response){
        try {
            let id = req.params.id;
            await this.deleteEmployeeUseCase.execute(id);
            return res.json({message: "Funcionário deletado com sucesso!"})
        } catch (error) {
            return res.status(400).json({error: "Error ao deletar o Funcionário"})
        }
    }

    async buySale(req: Request, res: Response){
        try {
            let data = req.body;
            console.log(data)
            let response = this.buySaleUseCase.execute(data)
            return res.json({message: "Compra registrada com sucesso!"})
        } catch (error) {
            return error
        }
    }
}