import { User, Shop } from './widget/index'

let shop = new Shop()
let user = new User()
// let item = new Item()
// console.log(Item)
user.name = 'Khoa'
user.age = 29
user.addItem(shop.items[0])
// user.printCart()
user.addItem(shop.items[1]);
user.addItem(shop.items[1]);
// user.addItem(shop.items[1]);
// user.printCart();
// user.removeItem(shop.items[1], 2);
// user.printCart();
// user.addItem(shop.items[2]);
// user.addItem(shop.items[2]);
// user.addItem(shop.items[2]);
// user.printCart();
console.log(user.cartTotal());
// user.printCart();
// console.log(user.cartTotal());
user.removeAll();
user.printCart()
