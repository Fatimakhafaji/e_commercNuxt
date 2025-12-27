<template>
  <div class="container py-5" data-aos="fade-up">
    <h1 class="text-capitalize mb-5 text-center">Electronics Products</h1>
    <div v-if="pending" class="text-center py-5">
      <div class="spinner-border text-primary" role="status"></div>
    </div>
    <div v-else-if="products.length === 0" class="text-center py-5">
      <p>No products found.</p>
    </div>
    <div v-else class="row g-4">
      <div class="col-md-4 col-lg-3" v-for="product in products" :key="product.id">
        <ProductCard :product="product" />
      </div>
    </div>
  </div>
</template>

<script setup>
const { fetchProductsByCategory } = useApi()
const { data: products, pending } = useAsyncData('electronics', () => fetchProductsByCategory('electronics'))

useHead({ title: 'Electronics - Developer Test Store' })
</script>