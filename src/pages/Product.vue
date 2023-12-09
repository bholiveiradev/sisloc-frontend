<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="pt-4 pb-4">
    <div class="card">
      <div class="card-body p-5">
        <div class="row">
          <div class="col-md-6 text-center">
            <img
              class="product-img img-fluid rounded-3"
              :src="product.image"
              :alt="product.name"
            />
          </div>
          <div class="col-md-6">
            <h4 class="mb-4 mt-4 mt-md-0">
              {{ product.name }}
            </h4>
            <p>Escolha a modalidade:</p>
            <div class="d-flex flex-wrap gap-2 mb-5 grid grid-default">
              <div v-for="(modality, idx) in modalities" :key="modality.value">
                <button
                  :class="[
                    'btn btn-sm w-100',
                    current.modalityIndex === idx
                      ? 'btn-warning'
                      : 'btn-primary',
                  ]"
                  v-if="modality.price"
                  @click="onChangeModality(modality, idx)"
                >
                  {{ modality.label }}
                  <span class="d-block">
                    {{ currencyBrl(modality.price) }}
                  </span>
                </button>
              </div>
            </div>
            <div class="pt-2 pb-2 d-flex align-items-end">
              <h3 class="mb-0">
                {{ currencyBrl(current.productUnitPrice) }}
              </h3>
            </div>
            <div class="row">
              <!-- <div class="col-6 col-md-4">
                <div class="form-group">
                  <input
                    type="number"
                    min="1"
                    class="form-control"
                    value="1"
                    v-model="current.quantity"
                    @input="onChangeQuantity"
                  />
                </div>
              </div> -->
              <div class="col-6 col-md-8 mt-2">
                <button class="btn btn-success btn-lg" @click="addItemToCart">
                  <font-awesome-icon :icon="['fas', 'shopping-cart']" />
                  <span class="ms-2 ms-md-0 ms-lg-2">Adicionar</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="row pt-5">
          <ul class="nav nav-tabs" role="tablist">
            <li class="nav-item" role="presentation">
              <a
                class="nav-link active"
                data-bs-toggle="tab"
                href="#home"
                aria-selected="true"
                role="tab"
              >
                Informações
              </a>
            </li>
          </ul>
          <div class="tab-content pt-3">
            <div class="tab-pane fade show active" id="home" role="tabpanel">
              <p>
                {{ product.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.grid {
  display: grid !important;
}
.grid-default {
  grid-template-columns: repeat(auto-fill, 100px);
}
.product-img {
  background-color: white;
}
</style>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useStore } from 'vuex';
import { currencyBrl } from '@/utils/currency';

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
  data: Product;
}

interface Modality {
  label: string;
  value: string;
  field: string;
  price: number;
}

const route = useRoute();
const router = useRouter();
const store = useStore();

const product = ref({} as Product);
const modalities = ref([] as Modality[]);
const current = ref({
  productUnitPrice: 0,
  modalityIndex: 0,
  modality: {} as Modality,
  quantity: 1,
});

const onChangeModality = (modality: Modality, idx: number) => {
  current.value.modalityIndex = idx;
  current.value.modality = modality;
  onChangeUnitPrice(modality.price);
};

const onChangeUnitPrice = (price: number) => {
  current.value.productUnitPrice = price;
};

// const onChangeQuantity = () => {
//   if (isNaN(current.value.quantity) || current.value.quantity <= 0) {
//     current.value.quantity = 1;
//   }
// };

const addItemToCart = () => {
  const { id, name, image } = product.value;

  let item = {
    id,
    name,
    image,
    price: current.value.productUnitPrice,
    modality: current.value.modality,
  };

  store.dispatch('cart/addCartItem', {
    item,
    quantity: current.value.quantity,
  });

  router.push('/carrinho');
};

onMounted(async () => {
  try {
    const { id } = route.params;
    const productList: ProductList = await api.get(`/products/${id}`);

    product.value = productList.data;
    product.value.image = `${process.env.VUE_APP_UPLOADS_URL}/${productList.data.image}`;

    modalities.value = [
      {
        label: 'Diário',
        value: 'daily',
        field: 'dailyPrice',
        price: product.value.dailyPrice,
      },
      {
        label: 'Semanal',
        value: 'weekly',
        field: 'weeklyPrice',
        price: product.value.weeklyPrice,
      },
      {
        label: 'Quinzenal',
        value: 'biweekly',
        field: 'biweeklyPrice',
        price: product.value.biweeklyPrice,
      },
      {
        label: 'Mensal',
        value: 'monthly',
        field: 'monthlyPrice',
        price: product.value.monthlyPrice,
      },
    ];

    current.value.modality = modalities.value[0];

    onChangeUnitPrice(productList.data.dailyPrice);
  } catch (err) {
    console.log(err);
  }
});
</script>
