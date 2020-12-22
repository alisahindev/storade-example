import { createContext, useContext } from 'react';
import CartStore from './cartStore';
import DataStore from './dataStore';

export const store = {
    dataStore: new DataStore(),
    cartStore: new CartStore(),
};

export const StoreContext = createContext(store);
export const useStore = () => {
    return useContext(StoreContext);
};