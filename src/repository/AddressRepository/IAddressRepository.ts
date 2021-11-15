import { Address } from "../../entity/Address";

export default interface IAddressRepository{
    create(address: Address)
    update(address: Address)
}