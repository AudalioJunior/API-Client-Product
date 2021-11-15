import { Client } from "../../entity/Client";

export default interface ICreateClientUseCase {
    execute(client: Client)
}