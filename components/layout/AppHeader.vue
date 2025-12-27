<!-- components/layout/AppHeader.vue (مصحح) -->
<template>
  <header class="bg-light shadow-sm sticky-top">
    <nav class="navbar navbar-expand-lg navbar-light container">
      <NuxtLink to="/" class="navbar-brand fw-bold fs-3 text-dark">DT</NuxtLink>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav mx-auto">
          <li class="nav-item mx-3">
            <NuxtLink to="/category/electronics" class="nav-link">Electronics</NuxtLink>
          </li>
          <li class="nav-item mx-3">
            <NuxtLink to="/category/jewelery" class="nav-link">Jewelry</NuxtLink>
          </li>
          <li class="nav-item mx-3">
            <NuxtLink to="/category/mens-clothing" class="nav-link">Men Clothing</NuxtLink>
          </li>
          <li class="nav-item mx-3">
            <NuxtLink to="/category/womens-clothing" class="nav-link">Women Clothing</NuxtLink>
          </li>
        </ul>
        <div class="d-flex align-items-center gap-3">
          <NuxtLink to="/cart" class="position-relative text-dark">
            <i class="bi bi-cart3 fs-4"></i>
            <span v-if="cart.itemCount" class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              {{ cart.itemCount }}
            </span>
          </NuxtLink>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup>
const cart = useCartStore()
</script>

<style scoped>
.bi-cart3::before { content: "\f3ff"; }
</style>