import { Client } from "../../entity/Client";

export default interface IClientRepository{
    getAll(): Promise<Client[]>;
    create(client: Client);
    update(client: Client, id: string);
    delete(id: string);
}