import {NextFunction, Request, Response} from "express";
import CreateClientUseCase from "../useCases/Client/CreateClientUseCase";
import DeleteClientUseCase from "../useCases/Client/DeleteClientUseCase";
import FindClientUseCase from "../useCases/Client/FindClientsUseCase";
import UpdateClientUseCase from "../useCases/Client/UpdateClientUseCase";

export class ClientController {
    private createClientUseCase = new CreateClientUseCase();
    private findClientsUseCase = new FindClientUseCase();
    private updateClientUseCase = new UpdateClientUseCase();
    private deleteClientUseCase = new DeleteClientUseCase();
    
    async getAll(req: Request, res: Response){
        try {
            const result = await this.findClientsUseCase.execute()
            return res.json({clients: result})
        } catch (error) {
            return res.status(400).json({error: "Error ao buscar os clientes!"})
        }
    }

    async create(req: Request, res: Response){
        try {
            const data = req.body;
            const result = await this.createClientUseCase.execute(data);
            return res.json({message: "Cliente cadastrado com sucesso!", client: result});
        } catch (error) {
            return res.status(400).json({error: "Error ao cadastrar o Cliente!"});
        }
    }

    async update(req: Request, res: Response){
        try {
            let id = req.params.id;
            let data = req.body;
            await this.updateClientUseCase.execute(data, id);
            return res.json({message: "Cliente atualizado com sucesso!"});
        } catch (error) {
            return res.status(400).json({error: "Error ao atualizar o Cliente!"});
        }
    }
    async delete(req: Request, res: Response){
    try {
        let id = req.params.id;
        await this.deleteClientUseCase.execute(id);
        return res.json({message : "Cliente deletado com sucesso!"});
    } catch (error) {
        return res.status(400).json({error: "Error ao deletar o usuário!"});
    }
    }
}