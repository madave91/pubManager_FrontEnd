import { Deserializable } from "../../deserializable.model";

export class Product implements Deserializable{
    public id: number;
    public productName: string;
    public price: number;
    public defaultQuantity: number;
    public actualQuantity: number;
    public type: string;
    public details: string;
    public selected: boolean

    

    deserialize(input: any): this{
        //Object.assign(this, input);
        this.id = input.id;
        this.productName = input.productName;
        this.price = input.price;
        this.defaultQuantity = input.defaultQuantity;
        this.actualQuantity = input.actualQuantity;
        this.type = input.type;
        this.details = input.details;
        this.selected = false;
        return this;
    }
}