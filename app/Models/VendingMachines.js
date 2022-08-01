export class Snack{
    constructor(name,price,img,quantity){
        this.name = name,
        this.price = price,
        this.img = img,
        this.quantity = quantity
    }

    get Template(){
        return `
        <div id="snacks" class="col-4 bg-dark text-light">
        <p>${this.name} | ${this.price} <button onclick="app.snacksController.total('${this.name}')" class="btn"><img src="${this.img}" alt=""></button></p>
        </div>
        `
    }




}