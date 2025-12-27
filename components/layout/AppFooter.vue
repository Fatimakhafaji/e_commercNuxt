<template>
  <footer class="bg-dark text-light py-5 mt-5">
    <div class="container">
      <div class="row">
        <div class="col-md-4">
          <h2 class="fs-1 fw-bold mb-3">DT</h2>
          <p>DEVELOPER TEST</p>
        </div>
        <div class="col-md-4">
          <h5>Quick Links</h5>
          <ul class="list-unstyled">
            <li><NuxtLink to="/" class="text-light">Home</NuxtLink></li>
            <li><NuxtLink to="/category/electronics" class="text-light">Electronics</NuxtLink></li>
            <li><NuxtLink to="/category/jewelery" class="text-light">Jewelry</NuxtLink></li>
            <li><NuxtLink to="/category/men's clothing" class="text-light">Men Clothing</NuxtLink></li>
          </ul>
        </div>
        <div class="col-md-4">
          <h5>Contact Us</h5>
          <p>+971 00 000 0000</p>
          <p>info@sample.com</p>
          <div class="d-flex gap-3 fs-4">
            <a href="#" class="text-light"><i class="bi bi-facebook"></i></a>
            <a href="#" class="text-light"><i class="bi bi-instagram"></i></a>
            <a href="#" class="text-light"><i class="bi bi-twitter"></i></a>
            <a href="#" class="text-light"><i class="bi bi-youtube"></i></a>
          </div>
        </div>
      </div>
      <hr>
      <p class="text-center">© Developer Test 2024. All Rights Reserved.</p>
    </div>
  </footer>
</template>