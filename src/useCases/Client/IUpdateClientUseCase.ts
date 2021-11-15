import { Client } from "../../entity/Client";

export default interface IUpdateClientUseCase{
    execute(client: Client, id: string)
}