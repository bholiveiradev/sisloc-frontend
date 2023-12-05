<template>
  <nav
    class="navbar navbar-expand-lg bg-body-tertiary sticky-top"
    data-bs-theme="light"
  >
    <div class="container">
      <router-link class="navbar-brand" to="/">
        <img
          :src="require('@/assets/images/logo.png')"
          width="100"
          alt="logo sisloc"
        />
      </router-link>
      <button
        class="navbar-toggler border-0"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarColor01"
        aria-controls="navbarColor01"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <font-awesome-icon :icon="['fas', 'bars']" size="lg" />
      </button>
      <div class="collapse navbar-collapse" id="navbarColor01">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <router-link
              :class="[
                'nav-link',
                'text-uppercase',
                { active: route.path === '/' },
              ]"
              to="/"
            >
              Produtos
            </router-link>
          </li>
          <li class="nav-item">
            <router-link
              class="nav-link d-flex align-items-center text-uppercase"
              :class="[{ active: route.path === '/carrinho' }]"
              to="/carrinho"
            >
              <span class="me-2">Carrinho</span>
              <div class="position-relative">
                <font-awesome-icon :icon="['fas', 'shopping-cart']" size="xl" />
                <span
                  class="position-absolute start-100 translate-middle badge rounded-pill bg-danger cart-items"
                >
                  {{ qtyItemsOnCart }}
                </span>
              </div>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
.navbar-toggler:focus {
  box-shadow: none;
}
.cart-items {
  top: -5px;
}

@media (max-width: 991px) {
  .navbar .nav-item {
    margin-right: 0;
    margin-left: 0;

    .nav-link {
      padding-right: 0;
      padding-left: 0;
    }
  }
  .navbar-collapse {
    padding-top: 1rem;
  }
}
</style>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import { useStore } from 'vuex';
import { computed } from 'vue';

const route = useRoute();
const store = useStore();

const qtyItemsOnCart = computed(() => store.getters['cart/qtyItemsCart']);
</script>
