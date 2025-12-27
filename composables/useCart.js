export const useCart = () => {
  const cart = useState('cart', () => [])

  const addToCart = (product) => {
    const item = cart.value.find(i => i.id === product.id)
    if (item) {
      item.quantity++
    } else {
      cart.value.push({ ...product, quantity: 1 })
    }
  }

  const removeFromCart = (id) => {
    cart.value = cart.value.filter(i => i.id !== id)
  }

  const updateQuantity = (id, q) => {
    const item = cart.value.find(i => i.id === id)
    if (item && q > 0) item.quantity = q
  }

  const cartTotal = computed(() => 
    cart.value.reduce((total, item) => total + (item.price * item.quantity), 0)
  )

  return { cart, addToCart, removeFromCart, updateQuantity, cartTotal }
}