<script setup>
// جلب 4 منتجات عشوائية للعروض الخاصة [cite: 5]
const { data: products } = await useFetch('https://fakestoreapi.com/products?limit=4');
</script>

<template>
  <section class="container py-5">
    <h3 class="fw-bold mb-4 text-uppercase">Special Offers</h3>
    <div class="row g-4">
      <div v-for="product in products" :key="product.id" class="col-md-3">
        <div class="card border-0 rounded-0 shadow-sm h-100 text-center p-3">
          <div style="height: 200px;" class="d-flex align-items-center justify-content-center mb-3">
            <img :src="product.image" class="img-fluid h-100 object-fit-contain" :alt="product.title">
          </div>
          <h6 class="text-truncate px-2">{{ product.title }}</h6>
          <p class="fw-bold mb-0">
            <span class="text-danger me-2">AED {{ (product.price * 0.8).toFixed(2) }}</span>
            <span class="text-decoration-line-through text-muted small">AED {{ product.price }}</span>
          </p>
        </div>
      </div>
    </div>
  </section>
</template>