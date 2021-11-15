import ClientRepository from "../../repository/ClientRepository/ClientRepository";
import IFindClientUseCase from "./IFindClientsUseCase";

export default class FindClientUseCase implements IFindClientUseCase{
    private clientRepository = new ClientRepository()
    execute() {
        try {
            const results = this.clientRepository.getAll()
            return results;
        } catch (error) {
            return error
        }
    }
}