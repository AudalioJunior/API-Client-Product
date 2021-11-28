import { request } from "http";
import { getRepository } from "typeorm";
import { Request } from "../../entity/Request";
import IRequestRepository from "./IRequestRepository";

export default class RequestRepository implements IRequestRepository {

    private ormRepository = getRepository(request)

    async requestProduct(request: Request) {
        try {
          const requestDb = await this.ormRepository.save(request);
          return requestDb  
        } catch (error) {
            return error
        }
    }
}