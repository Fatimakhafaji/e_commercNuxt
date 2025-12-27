export const useApi = () => {
  const fetchProducts = async () => {
    return await $fetch('https://fakestoreapi.com/products')
  }

  const fetchCategories = async () => {
    return await $fetch('https://fakestoreapi.com/products/categories')
  }

  const fetchProductsByCategory = async (category) => {
    return await $fetch(`https://fakestoreapi.com/products/category/${category}`)
  }

  const fetchProduct = async (id) => {
    return await $fetch(`https://fakestoreapi.com/products/${id}`)
  }

  return {
    fetchProducts,
    fetchCategories,
    fetchProductsByCategory,
    fetchProduct
  }
}