import { Employee } from "../../entity/Employee";

export default interface IUpdateEmployeeUseCase{
    execute(employee: Employee, id: string)
}