interface Modality {
  label: string;
  value: string;
  field: string;
  price: number;
}

interface Item {
  id: number;
  name: string;
  image: string;
  price: number;
  modality: Modality;
  quantity: number;
  subtotal: number;
}

interface CartItems {
  items: Item[];
}

enum MutationTypes {
  ADD_TO_CART = 'ADD_TO_CART',
  UPDATE_ITEM_QTY = 'UPDATE_ITEM_QTY',
  REMOVE_FROM_CART = 'REMOVE_FROM_CART',
}

export default {
  namespaced: true,
  state: {
    items: [],
  },
  mutations: {
    [MutationTypes.ADD_TO_CART](state: CartItems, newItem: Item) {
      const existingItem = state.items.find(
        (item) =>
          item.id === newItem.id &&
          item.name === newItem.name &&
          item.price === newItem.price
      );

      if (existingItem) {
        existingItem.quantity += newItem.quantity;
        existingItem.subtotal = existingItem.quantity * existingItem.price;
      } else {
        newItem.subtotal = newItem.quantity * newItem.price;
        state.items.push(newItem);
      }
    },
    [MutationTypes.UPDATE_ITEM_QTY](state: CartItems, { index, newQuantity }) {
      const item = state.items[index];
      if (item) {
        if (newQuantity <= 0) {
          state.items.splice(index, 1);
        } else {
          item.quantity = newQuantity;
          item.subtotal = item.quantity * item.price;
        }
      }
    },
    [MutationTypes.REMOVE_FROM_CART](state: CartItems, index: number) {
      state.items.splice(index, 1);
    },
  },
  actions: {
    addCartItem({ commit }, { item, quantity }) {
      const newItem = { ...item, quantity };
      commit(MutationTypes.ADD_TO_CART, newItem);
    },
    updateCartItem({ commit }, { index, newQuantity }) {
      commit(MutationTypes.UPDATE_ITEM_QTY, { index, newQuantity });
    },
    removeCartItem({ commit }, index: number) {
      commit(MutationTypes.REMOVE_FROM_CART, index);
    },
  },
  getters: {
    itemsCart: (state: CartItems) => state.items,
    qtyItemsCart: (state: CartItems) => state.items.length,
    totalCart: (state: CartItems) =>
      state.items.reduce((total, item) => total + item.subtotal, 0),
  },
};
