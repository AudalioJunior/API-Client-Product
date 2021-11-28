import { getRepository } from "typeorm";
import { BuySale } from "../../entity/BuySale";
import IBuySaleRepository from "./IBuySaleRepository";

export default class BuySaleRepository implements IBuySaleRepository{

    private ormRepository = getRepository(BuySale);

    async saleProduct(buySale: BuySale) {
        try {
            const buySaleDb = await this.ormRepository.save(buySale);
            return buySaleDb
        } catch (error) {
            return error
        }
    }
}