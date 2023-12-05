<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="pt-4 pb-4">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col">
        <div v-if="!itemsCart.length">
          <div class="card">
            <div class="card-body p-4 text-center">
              <h3 class="mb-4">Nenhum produto no carrinho</h3>
              <router-link class="btn btn-warning" to="/">
                Continuar comprando
              </router-link>
            </div>
          </div>
        </div>

        <div v-else>
          <div v-for="(item, idx) in itemsCart" :key="item.id">
            <cart-item-component :item="item" :idx="idx" />
          </div>

          <div class="card">
            <div class="card-body p-4 text-end">
              <span>Total R$</span>
              <h3 class="mb-0">
                {{
                  totalCart.toLocaleString('pt-br', {
                    minimumFractionDigits: 2,
                  })
                }}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useStore } from 'vuex';
import { computed } from 'vue';

import CartItemComponent from '@/components/CartItemComponent.vue';

const store = useStore();

const itemsCart = computed(() => store.getters['cart/itemsCart']);
const totalCart = computed(() => store.getters['cart/totalCart']);
</script>
