import { action, makeObservable, observable } from 'mobx';
import { items } from "../data/items"

class DataStore {
    dataItems = [...items];
    filteredItems = []

    constructor() {
        makeObservable(this, {
            dataItems: observable,
            filteredItems: observable,
            getData: action,
            search: action
        })
    }

    getData() {
        return this.data;
    }

    search(query) {
        query.toLowerCase()
        const items = this.dataItems.filter(item => item.title.toLowerCase().includes(query))
        this.filteredItems = items
    }
}


export default DataStore;