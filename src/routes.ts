import { ClientController } from "./controller/ClientController";
import { EmployeeController } from "./controller/EmployeeController";
import { ProductController } from "./controller/ProductController";

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
    },

    
    {
        method: "get",
        route: "/product",
        controller: ProductController,
        action: "getAll"
    },
    {
        method: "post",
        route: "/product",
        controller: ProductController,
        action: "create"
    },
    {
        method: "put",
        route: "/product/:id",
        controller: ProductController,
        action: "updated"
    },
    {
        method: "delete",
        route: "/product/:id",
        controller: ProductController,
        action: "delete"
    },

    {
        method: "get",
        route: "/employee",
        controller: EmployeeController,
        action: "getAll"
    },
    {
        method: "post",
        route: "/employee",
        controller: EmployeeController,
        action: "create"
    },
    {
        method: "put",
        route: "/employee/:id",
        controller: EmployeeController,
        action: "updated"
    },
    {
        method: "post",
        route: "/buysale",
        controller: EmployeeController,
        action: "buySale"
    }
];