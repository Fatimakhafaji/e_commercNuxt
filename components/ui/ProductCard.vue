<template>
  <div class="card h-100 border-0 shadow-sm" data-aos="fade-up">
    <NuxtLink :to="`/product/${product.id}`">
      <img :src="product.image" class="card-img-top p-4" style="height: 250px; object-fit: contain;" :alt="product.title">
    </NuxtLink>
    <div class="card-body d-flex flex-column">
      <h6 class="card-title text-truncate">{{ product.title }}</h6>
      <p class="text-muted small flex-grow-1">{{ product.category }}</p>
      <div class="d-flex justify-content-between align-items-center">
        <strong>${{ product.price }}</strong>
        <button @click="addToCart" class="btn btn-dark btn-sm">Add to Cart</button>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(['product'])
const cart = useCartStore()

const addToCart = () => {
  cart.addToCart(props.product)
}
</script>