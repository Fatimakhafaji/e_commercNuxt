<template>
  <div class="card mb-3 shadow-sm">
    <div class="row g-0">
      <div class="col-md-3">
        <img :src="item.image" class="img-fluid rounded-start" style="height: 150px; object-fit: contain;" :alt="item.title">
      </div>
      <div class="col-md-9">
        <div class="card-body d-flex flex-column h-100">
          <h6 class="card-title">{{ item.title }}</h6>
          <p class="text-muted small">{{ item.category }}</p>
          <div class="mt-auto d-flex justify-content-between align-items-center">
            <div>
              <strong>${{ (item.price * item.quantity).toFixed(2) }}</strong>
            </div>
            <div class="d-flex align-items-center gap-2">
              <button @click="updateQuantity(item.id, item.quantity - 1)" class="btn btn-outline-secondary btn-sm">-</button>
              <span class="px-3">{{ item.quantity }}</span>
              <button @click="updateQuantity(item.id, item.quantity + 1)" class="btn btn-outline-secondary btn-sm">+</button>
              <button @click="removeItem(item.id)" class="btn btn-danger btn-sm ms-3">Remove</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(['item'])
const cart = useCartStore()

const updateQuantity = (id, qty) => cart.updateQuantity(id, qty)
const removeItem = (id) => cart.removeFromCart(id)
</script>