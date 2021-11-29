import BuySaleDTO from "./BuySaleDTO";

export default interface IBuySaleEmployeeUseCase{
    execute(buySale: BuySaleDTO)
}