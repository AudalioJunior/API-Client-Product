import EmployeeRepository from "../../repository/EmployeeRepository/EmployeeRepository";
import IDeleteEmployeeUseCase from "./IDeleteEmployeeUseCase";

export default class DeleteEmployeeUseCase implements IDeleteEmployeeUseCase{
    private employeeRepository = new EmployeeRepository() 

    async execute(id: string) {
        try {
          await this.employeeRepository.delete(id);
          return  
        } catch (error) {
            return error;
        }
    }
}