import { Employee } from "../../entity/Employee";
import EmployeeRepository from "../../repository/EmployeeRepository/EmployeeRepository";
import IUpdateEmployeeUseCase from "./IUpdateEmployeeUseCase";

export default class UpdateEmployeeUseCase implements IUpdateEmployeeUseCase{
    private employeeRepository = new EmployeeRepository();

    async execute(employee: Employee, id: string) {
        try {
            const employeeUp = await this.employeeRepository.update(employee, id);
            return employeeUp;
        } catch (error) {
            return error;
        }
    }
}