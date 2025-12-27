<template>
  <div class="container py-5" data-aos="fade-up">
    <h1 class="mb-5 text-center">Shopping Cart</h1>
    
    <div v-if="cart.items.length === 0" class="text-center py-5">
      <p class="lead">Your cart is empty.</p>
      <NuxtLink to="/" class="btn btn-dark btn-lg">Continue Shopping</NuxtLink>
    </div>

    <div v-else>
      <div class="row">
        <div class="col-lg-8">
          <CartItem v-for="item in cart.items" :key="item.id" :item="item" />
        </div>
        <div class="col-lg-4">
          <div class="card shadow">
            <div class="card-body">
              <h5 class="card-title">Order Summary</h5>
              <hr>
              <div class="d-flex justify-content-between mb-3">
                <span>Total Items:</span>
                <strong>{{ cart.itemCount }}</strong>
              </div>
              <div class="d-flex justify-content-between mb-4">
                <span>Total Price:</span>
                <strong class="text-success fs-4">${{ cart.totalPrice }}</strong>
              </div>
              <button class="btn btn-dark w-100 btn-lg">Proceed to Checkout</button>
              <NuxtLink to="/" class="btn btn-outline-secondary w-100 mt-2">Continue Shopping</NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const cart = useCartStore()
useHead({ title: 'Shopping Cart' })
</script>