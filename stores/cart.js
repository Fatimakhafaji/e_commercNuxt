import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: []
  }),
  getters: {
    itemCount: (state) => state.items.reduce((total, item) => total + item.quantity, 0),
    totalPrice: (state) => state.items.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2)
  },
  actions: {
    addToCart(product) {
      const existing = this.items.find(i => i.id === product.id)
      if (existing) {
        existing.quantity++
      } else {
        this.items.push({ ...product, quantity: 1 })
      }
    },
    removeFromCart(id) {
      this.items = this.items.filter(i => i.id !== id)
    },
    updateQuantity(id, quantity) {
      if (quantity <= 0) {
        this.removeFromCart(id)
      } else {
        const item = this.items.find(i => i.id === id)
        if (item) item.quantity = quantity
      }
    },
    clearCart() {
      this.items = []
    }
  },
  persist: true
})