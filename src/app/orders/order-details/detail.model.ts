import { Deserializable } from "../../deserializable.model";

export class Detail implements Deserializable{
    public id: number;
    //public orderId: number;
    public productName: string;
    public quantity: number;
    public price: number;
    public comment: string;
    public selected: boolean;

    deserialize(input: any): this {
      this.id = input.id;
      this.productName = input.productName;
      this.quantity = input.quantity;
      this.price = input.price;
      this.comment = input.comment;
      this.selected = false;
      return this;
    }

  /* public setShow(orderId: number){
          if(this.orderId == orderId){
            this.show = true;
          }else{
            this.show = false;
          }
    }*/
}