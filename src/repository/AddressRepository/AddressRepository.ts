import { getRepository, Repository } from "typeorm";
import { Address } from "../../entity/Address";
import IAddressRepository from "./IAddressRepository";

export default class AddressRepository implements IAddressRepository{

    private ormRepository = getRepository(Address);

    async create(address: Address) {
        try {
            const addressDB = await this.ormRepository.save(address);
            console.log("o error", addressDB)
            return addressDB
        } catch (error) {
            return error
        }
    } 
    
    async update(address: Address) {
        try {
            const addressDB = await this.ormRepository.update(address.id, address);
            return addressDB
        } catch (error) {
            return error
        }
    }   
}