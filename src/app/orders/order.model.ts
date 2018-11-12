import { Detail } from "./order-details/detail.model";

export class Order{
    public id: number;
    public date: Date;
    public price: number;
    public paid: boolean;
    public selected: boolean;

    constructor(id: number, date: Date, price: number){
        this.id = id;
        this.date = date;
        this.price = price;
        this.paid = false;
        this.selected = false;
    }
}