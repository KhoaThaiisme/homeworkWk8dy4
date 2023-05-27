import Item from './Item'

import { v4 as uuidv4 } from "uuid";
let uuid = uuidv4()

export default class User {
    private _id: string = uuid
    private _name: string = ''
    private _age: number = 0
    private _cart: Item[] = []

    public get cart(): Item[] {
        return this._cart;
    }
    public set cart(value: Item[]) {
        this._cart = value;
    }
    public get age(): number {
        return this._age;
    }
    public set age(value: number) {
        this._age = value;
    }
    public get name(): string {
        return this._name;
    }
    public set name(value: string) {
        this._name = value;
    }
    public get id(): string {
        return this._id;
    }
    public set id(value: string) {
        this._id = value;
    }

    public addItem(item: Item):void {
        this.cart.push(item)
    }
    
    public removeAll():void {
        this.cart.splice(0, this.cart.length)
    }

    public removeItem(item:Item, number: number):void{
        for (let i = 0; i < this.cart.length; i++) {
            if(this.cart[i].id === item.id){
                this.cart.splice(i, number)
            }
        }
    }

    public cartTotal():number {
        let total = 0
        for(let i = 0; i < this.cart.length; i ++){
            total += this.cart[i].price
        }
        return Math.round(total)
    }

    public printCart(): void {
        console.log('Cart: ')
        for (let i = 0; i < this.cart.length; i ++ ) {
            console.log(this.cart[i].name)
        }
    }
}