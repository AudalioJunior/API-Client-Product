import { Employee } from "../../entity/Employee";

export default interface IFindEmployeeUseCase{
    execute(): Promise<Employee[]>
}