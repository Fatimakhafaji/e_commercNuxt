<template>
  <div>
    <HeroSection />
    <JewelryBanner />
    <SpecialOffers :special-products="specialProducts" />
    <FashionBanner />
    <NewArrivals :new-arrivals="newArrivals" />
    <MembershipBanner />
  </div>
</template>

<script setup>
const { fetchProducts } = useApi()
const products = ref([])
const specialProducts = ref([])
const newArrivals = ref([])

onMounted(async () => {
  products.value = await fetchProducts()
  specialProducts.value = products.value.filter(p => p.price < 100).slice(0, 4)
  newArrivals.value = products.value.slice(-4)
})
</script>