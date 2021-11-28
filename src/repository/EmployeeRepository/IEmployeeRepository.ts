import { Employee } from "../../entity/Employee";

export default interface IEmployeeRepository{
    getAll(): Promise<Employee[]>;
    create(employee: Employee);
    update(employee: Employee, id: string);
    delete(id: string);
}