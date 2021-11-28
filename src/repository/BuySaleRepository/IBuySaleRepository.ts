import { BuySale } from "../../entity/BuySale";

export default interface IBuySaleRepository{
    saleProduct(buySale: BuySale);
}