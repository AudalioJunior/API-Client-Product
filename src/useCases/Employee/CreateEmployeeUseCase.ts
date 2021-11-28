import { Employee } from "../../entity/Employee";
import EmployeeRepository from "../../repository/EmployeeRepository/EmployeeRepository";
import ICreateEmployeeUseCase from "./ICreateEmployeeUseCase";

export default class CreateEmployeeUseCase implements ICreateEmployeeUseCase{
    private employeeRepository = new EmployeeRepository()

    execute(employee: Employee) {
        try {
            const employeeDb = this.employeeRepository.create(employee);
            return employeeDb
        } catch (error) {
            return error
        }
    }
}