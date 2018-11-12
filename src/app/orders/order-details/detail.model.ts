export class Detail{
    public id: number;
    public orderId: number;
    public name: string;
    public quantity: number;
    public price: number;
    public comment: string;
    public selected: boolean;
    public show : boolean;

    constructor(id: number, orderId: number, name: string, quantity: number, price: number, comment: string){
        this.id = id;
        this.orderId = orderId;
        this.name = name;
        this.quantity = quantity;
        this.price = price;
        this.comment = comment;
        this.selected = false;
        this.show= false
    }

  /* public setShow(orderId: number){
          if(this.orderId == orderId){
            this.show = true;
          }else{
            this.show = false;
          }
    }*/
}