<template>
  <div class="card p-lg-3">
    <div class="card-img pt-3 pe-3 ps-3">
      <router-link :to="`/produto/${product.id}`">
        <img
          class="card-img-top img-fluid rounded-3"
          :src="productImage"
          :alt="product.name"
        />
      </router-link>
    </div>
    <div class="card-body text-center p-3 mt-3">
      <h6 class="card-title text-center">
        <router-link
          class="text-decoration-none"
          :to="`/produto/${product.id}`"
        >
          {{ product.name }}
        </router-link>
      </h6>
      <div class="d-flex align-items-end justify-content-center">
        <h4 class="card-text fw-bold mb-0">
          {{ currencyBrl(product.dailyPrice) }}
        </h4>
        <span class="ms-1">/dia</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card-img-top {
  height: 250px;
  object-fit: cover;
  object-position: center;
  background-color: white;
}
</style>

<script lang="ts">
import { currencyBrl } from '../utils/currency';

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

interface Props {
  product: {
    image: string;
  };
}

export default {
  props: {
    product: {
      type: Object as () => Product,
      required: true,
    },
  },

  setup(props: Props) {
    const productImage = `${process.env.VUE_APP_UPLOADS_URL}/${props.product.image}`;

    return { productImage, currencyBrl };
  },
};
</script>
