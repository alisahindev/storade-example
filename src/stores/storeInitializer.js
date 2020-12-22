import CartStore from "./cartStore";


export default function initializeStores() {
  return {
    cartStore: new CartStore(),
  };
}
