<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="pt-4">
    <search-product-component @onSearchProducts="onSearchProducts" />
  </div>
  <div class="row pt-4 pb-4">
    <div
      class="col-sm-6 col-md-4 col-lg-3 product"
      v-for="product in filteredProducts"
      :key="product.id"
    >
      <product-card-component :product="product" />
    </div>
  </div>
</template>

<style scoped>
.product {
  padding-top: 0.8rem;
  padding-bottom: 0.8rem;
}
</style>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';

import ProductCardComponent from '@/components/ProductCardComponent.vue';
import SearchProductComponent from '@/components/SearchProductComponent.vue';

import api from '@/services/api';

interface Product {
  id: number;
  name: string;
  image: string;
  description: string;
  dailyPrice: number;
  weeklyPrice: number;
  biweeklyPrice: number;
  monthlyPrice: number;
}

interface ProductList {
  data: Product[];
}

const products = ref([] as Product[]);
const searchTerm = ref('');

const onSearchProducts = (term: string) => {
  searchTerm.value = term;
};

const filteredProducts = computed(() => {
  return products.value.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.value.toLowerCase())
  );
});

onMounted(async () => {
  try {
    let productsList: ProductList = await api.get('/products');
    products.value = productsList.data;
  } catch (err) {
    console.error(err);
  }
});
</script>
