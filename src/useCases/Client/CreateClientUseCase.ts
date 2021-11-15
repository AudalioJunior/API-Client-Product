import { Address } from "../../entity/Address";
import { Client } from "../../entity/Client";
import AddressRepository from "../../repository/AddressRepository/AddressRepository";
import ClientRepository from "../../repository/ClientRepository/ClientRepository";
import ICreateClientUseCase from "./ICreateClientUseCase";

export default class CreateClientUseCase implements ICreateClientUseCase{
    private addressRepository = new AddressRepository()
    private clientRepository = new ClientRepository()

    async execute(client: Client) {
        try {
            const addressClientSaveDB: Address = await this.addressRepository.create(client.address);
            client.address = addressClientSaveDB;
            const clientSaveDB: Client = await this.clientRepository.create(client);
            return clientSaveDB;
        } catch (error) {
             return error
        }
    }
}