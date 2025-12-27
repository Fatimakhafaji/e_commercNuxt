<template>
  <div class="container py-5" data-aos="fade-up">
    <div v-if="pending" class="text-center py-5">
      <div class="spinner-border text-primary" role="status"></div>
    </div>
    <div v-else-if="!product" class="text-center py-5">
      <p>Product not found.</p>
    </div>
    <div v-else class="row">
      <div class="col-md-6">
        <img :src="product.image" class="img-fluid rounded shadow" style="max-height: 600px; object-fit: contain;" :alt="product.title">
      </div>
      <div class="col-md-6">
        <h1 class="display-6 fw-bold">{{ product.title }}</h1>
        <p class="text-capitalize text-muted fs-5">{{ product.category }}</p>
        <p class="lead my-4">{{ product.description }}</p>
        <div class="d-flex align-items-center gap-4 my-4">
          <h3 class="text-success fw-bold">${{ product.price }}</h3>
        </div>
        <button @click="addToCart" class="btn btn-dark btn-lg px-5">Add to Cart</button>
      </div>
    </div>
  </div>
</template>

<script setup>
const route = useRoute()
const id = route.params.id

const { fetchProduct } = useApi()
const { data: product, pending } = useAsyncData(`product-${id}`, () => fetchProduct(id))

const cart = useCartStore()
const addToCart = () => {
  if (product.value) {
    cart.addToCart(product.value)
   
  }
}

useHead({
  title: product.value ? product.value.title : 'Product'
})
</script>