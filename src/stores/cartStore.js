import { action, computed, makeObservable, observable } from "mobx";
import { items } from "../data/items"

class CartStore {
    cartItems = []

    constructor() {
        makeObservable(this, {
            cartItems: observable,
            subTotal: computed,
            tax: computed,
            discount: computed,
            addItem: action,
            getItems: action,
            removeItem: action
        })
    }
    get subTotal() {
        let total = 0
        this.cartItems.map(item => total += item.price)
        return total
    }

    get tax() {
        return (this.subTotal * 18) / 100
    }

    get discount() {
        return (this.subTotal * 10) / 100
    }


    addItem(id) {
        const isExist = this.cartItems.find(item => item.id === id)
        if (isExist) return
        const newItem = items.find(item => item.id === id)
        this.cartItems.push(newItem);
    }

    removeItem(id) {
        const removeItems = this.cartItems.filter(item => item.id !== id)
        this.cartItems = [...removeItems]
    }

    getItems() {
        return this.cartItems;
    }

}

export default CartStore