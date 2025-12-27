<template>
  <section class="py-5" data-aos="fade-up">
    <div class="container">
      <h2 class="text-center mb-5 fw-bold">NEW ARRIVALS</h2>
      <div class="row g-4">
        <div class="col-md-3" v-for="product in newArrivals" :key="product.id">
          <ProductCard :product="product" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps(['newArrivals'])
</script>