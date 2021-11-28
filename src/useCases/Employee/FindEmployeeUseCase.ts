import { Employee } from "../../entity/Employee";
import EmployeeRepository from "../../repository/EmployeeRepository/EmployeeRepository";
import IFindEmployeeUseCase from "./IFindEmployeeUseCase";

export default class FindEmployeeUseCase implements IFindEmployeeUseCase{
    private employeeRepository = new EmployeeRepository();

    execute(): Promise<Employee[]> {
        try {
            const employeeDb = this.employeeRepository.getAll();
            return employeeDb
        } catch (error) {
            return error
        }
    }
}