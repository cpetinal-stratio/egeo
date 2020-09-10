export declare enum ORDER_TYPE {
    ASC = "asc",
    DESC = "desc"
}
export declare class Order {
    orderBy: string;
    type: ORDER_TYPE;
    constructor(orderBy: string, type: ORDER_TYPE);
}
