import Item from './Item'

export default class Shop {
    private _items: Item[] = [];

    public get items(): Item[] {
        return this._items;
    }
    public set items(value: Item[]) {
        this._items = value;
    }
    constructor() {
        let itemA = new Item();
        itemA.name = 'Shirt';
        itemA.price = 19.99;
        itemA.description = 'Nike Shirt';
        this._items.push(itemA);
        
        let itemB = new Item();
        itemB.name = 'Socks';
        itemB.price = 15.99;
        itemB.description = 'Nike Soccer Socks';
        this._items.push(itemB);

        let itemC = new Item();
        itemC.name = 'Shoes';
        itemC.price = 59.99;
        itemC.description = 'Nike Shoes';
        this._items.push(itemC);
    }
}