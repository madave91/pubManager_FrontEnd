export class Detail{
    public id: number;
    //public orderId: number;
    public productName: string;
    public quantity: number;
    //public price: number;
    public comment: string;

    deserialize(input: any): this {
      this.id = input.id;
      this.productName = input.productName;
      this.quantity = input.quantity;
      this.comment = input.comment;
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