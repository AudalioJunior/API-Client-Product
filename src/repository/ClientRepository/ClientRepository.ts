import { getRepository, Repository } from "typeorm";
import { Client } from "../../entity/Client";
import IClientRepository from "./IClientRepository";

export default class ClientRepository implements IClientRepository{

    private ormRepository = getRepository(Client);

    async getAll(): Promise<Client[]> {
        try {
            const clientsDB = await this.ormRepository.createQueryBuilder('client')
            .leftJoinAndSelect("client.address", "address") 
            .getMany()
            return clientsDB
        } catch (error) {
            return error
        }
    }
    async create(client: Client) {
        try {
            const clientDB = await this.ormRepository.save(client);
            return clientDB; 
        } catch (error) {
            return error;
        }
    }
    async update(client: Client, id: string) {
        try {
            const clientDB = await this.ormRepository.update(id, client)
            return clientDB
        } catch (error) {
            return error
        }
    }
    async delete(id: string) {
        try {
            const clientDB = await this.ormRepository.createQueryBuilder("client")
            .delete()
            .where("id = :id", {id: id})
            .execute();
            return clientDB
        } catch (error) {
            return error
        }
    }
}