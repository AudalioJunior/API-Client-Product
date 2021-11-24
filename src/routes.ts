import { ClientController } from "./controller/ClientController";

export const Routes = [
    {
        method: "get",
        route: "/client",
        controller: ClientController,
        action: "getAll"
    },
    {
        method: "post",
        route: "/client",
        controller: ClientController,
        action: "create"
    },
    {
        method: "put",
        route: "/client/:id",
        controller: ClientController,
        action: "update"
    },
    {
        method: "delete",
        route: "/client/:id",
        controller: ClientController,
        action: "delete"
    }
];