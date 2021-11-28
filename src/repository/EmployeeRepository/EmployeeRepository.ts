import { getRepository } from "typeorm";
import { BuySale } from "../../entity/BuySale";
import { Employee } from "../../entity/Employee";
import IEmployeeRepository from "./IEmployeeRepository";

export default class EmployeeRepository implements IEmployeeRepository{

    private ormRepository = getRepository(Employee)

    async getAll(): Promise<Employee[]> {
        try {
            const employeeDb = await this.ormRepository.createQueryBuilder('employee')
            .getMany()
            return employeeDb
        } catch (error) {
            return error
        }
    }
    async create(employee: Employee) {
        try {
            const employeeDb = await this.ormRepository.save(employee);
            return employeeDb
        } catch (error) {
            return error
        }
    }

    async update(employee: Employee, id: string) {
        try {
            const employeeDb = await this.ormRepository.update(id, employee)
            return employeeDb
        } catch (error) {
            return error
        }
    }
    
    async delete(id: string) {
        try {
            const employeeDb = await this.ormRepository.createQueryBuilder('employee')
            .delete()
            .where("id = :id", {id: id})
            .execute();
            return employeeDb
        } catch (error) {
            return error
        }
    }
}