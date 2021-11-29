import { BuySale } from "../../entity/BuySale";
import { Request } from "../../entity/Request";
import BuySaleRepository from "../../repository/BuySaleRepository/BuySaleRepository";
import RequestRepository from "../../repository/RequestRepository/RequestRepository";
import BuySaleDTO from "./BuySaleDTO";
import IBuySaleEmployeeUseCase from "./IBuySaleEmployeeUseCase";

export default class BuySaleEmployeeUseCase implements IBuySaleEmployeeUseCase {
    private requestRepository = new RequestRepository();
    private buySaleRepository = new BuySaleRepository();

    async execute(buySaleDto: any) {
        try {
            buySaleDto.date = new Date()
            const buySale: BuySale = await this.buySaleRepository.saleProduct(buySaleDto.buySale)
            buySaleDto.request.buySale.id = buySale.id;
            console.log(buySaleDto)
            const request: Request = await this.requestRepository.requestProduct(buySaleDto.request)
            return {buySale: BuySale, request: request};

        } catch (error) {
            return error;
        }
    }
}