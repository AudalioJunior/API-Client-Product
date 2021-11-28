import { Request } from "../../entity/Request";

export default interface IRequestRepository{
    requestProduct(request: Request);
}