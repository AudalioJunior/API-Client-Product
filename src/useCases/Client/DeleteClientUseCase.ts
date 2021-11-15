import ClientRepository from "../../repository/ClientRepository/ClientRepository";
import IDeleteClientUseCase from "./IDeleteClientUseCase";

export default class DeleteClientUseCase implements IDeleteClientUseCase{
    private clientRepository = new ClientRepository()

    async execute(id: string) {
        try {
            await this.clientRepository.delete(id)
            return
        } catch (error) {
            return error
        }
    }
}