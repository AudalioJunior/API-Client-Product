import { Client } from "../../entity/Client";
import AddressRepository from "../../repository/AddressRepository/AddressRepository";
import ClientRepository from "../../repository/ClientRepository/ClientRepository";
import IUpdateClientUseCase from "./IUpdateClientUseCase";

export default class UpdateClientUseCase implements IUpdateClientUseCase{
    private addressRepository = new AddressRepository()
    private clientRepository = new ClientRepository()

    async execute(client: Client, id: string) {
        try {
            await this.addressRepository.update(client.address);
            const clientUp = await this.clientRepository.update(client, id);
            return clientUp;
        } catch (error) {
            return error;
        }
    }
}