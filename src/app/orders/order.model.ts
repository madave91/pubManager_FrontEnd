import { Detail } from "./order-details/detail.model";
import { Deserializable } from "./deserializable.model";

export class Order implements Deserializable{
    public orderId: number;
    public customerOrderProducts:  Array<Detail> = [];
    public price: number;
    public paid: boolean;
    public orderDate: Date;
    public selected: boolean;
    

    deserialize(input: any): this{
        //Object.assign(this, input);
        this.orderId = input.orderID;
        this.customerOrderProducts.push(new Detail().deserialize(input.customerOrderProducts));
        this.price = input.price;
        this.paid = input.paid;
        this.orderDate = new Date(input.orderDate);
        this.selected = false;
        return this;
    }
}