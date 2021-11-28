import { Employee } from "../../entity/Employee";

export default interface ICreateEmployeeUseCase{
    execute(employee: Employee)
}