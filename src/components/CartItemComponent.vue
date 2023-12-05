<template>
  <div class="card rounded-3 mb-4">
    <div class="card-body p-4">
      <div class="row d-flex justify-content-between align-items-center">
        <div class="col-md-4 col-lg-2 col-xl-2 bg-white">
          <img
            :src="item.image"
            class="img-fluid rounded-3"
            alt="Cotton T-shirt"
          />
        </div>
        <div class="col-md-8 col-lg-4 col-xl-4 mt-4 mt-md-0">
          <p class="lead fw-normal mb-2">
            {{ item.name }}
          </p>
          <p>
            <span class="text-muted"> Modalidade: </span>
            <span class="text-success">
              {{ item.modality.label }} -
              {{
                item.modality.price.toLocaleString('pt-br', {
                  minimumFractionDigits: 2,
                })
              }}
            </span>
          </p>
        </div>
        <div
          class="col-5 col-md-4 col-lg-3 col-xl-2 d-flex mt-4 mt-lg-0 mb-4 mb-lg-0"
        >
          <button class="btn btn-link px-2" @click="onDecrementQuantity">
            <font-awesome-icon :icon="['fas', 'minus']" size="lg" />
          </button>

          <input
            class="form-control text-center"
            name="quantity"
            type="number"
            v-model="quantity"
            @change="onChangeQuantity"
          />

          <button class="btn btn-link px-2" @click="onIncrementQuantity">
            <font-awesome-icon :icon="['fas', 'plus']" size="lg" />
          </button>
        </div>
        <div
          class="col-6 col-md-6 col-lg-2 col-xl-2 mt-4 mt-lg-0 mb-4 mb-lg-0 text-center"
        >
          <span class="d-block">Subtotal R$</span>
          <h4 class="mb-0">
            {{
              item.subtotal.toLocaleString('pt-br', {
                minimumFractionDigits: 2,
              })
            }}
          </h4>
        </div>
        <div
          class="col-1 col-md-2 col-lg-1 col-xl-1 mt-4 mt-lg-0 mb-4 mb-lg-0 text-center text-md-end"
        >
          <button class="btn btn-link text-danger" @click="onRemoveFromCart">
            <font-awesome-icon :icon="['fas', 'trash']" size="lg" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { ref, watch, computed } from 'vue';
import { useStore } from 'vuex';

interface Modality {
  label: string;
  value: string;
  field: string;
  price: number;
}

interface Item {
  id: number;
  name: string;
  image: string;
  price: number;
  modality: Modality;
  quantity: number;
  subtotal: number;
}

interface Props {
  idx: number;
  item: Item;
}

export default {
  props: {
    idx: {
      type: Number,
      required: true,
    },
    item: {
      type: Object as () => Item,
      required: true,
    },
  },

  setup(props: Props) {
    const store = useStore();

    const localQuantity = ref(props.item.quantity);

    watch(
      () => props.item.quantity,
      (newQuantity) => {
        localQuantity.value = newQuantity;
      }
    );

    const onUpdateQuantity = () => {
      store.dispatch('cart/updateCartItem', {
        index: props.idx,
        newQuantity: localQuantity.value,
      });
    };

    const onChangeQuantity = (event) => {
      localQuantity.value = event.target.value;
      onUpdateQuantity();
    };

    const onIncrementQuantity = () => {
      localQuantity.value++;
      onUpdateQuantity();
    };

    const onDecrementQuantity = () => {
      localQuantity.value--;
      onUpdateQuantity();
    };

    const onRemoveFromCart = () => {
      store.dispatch('cart/removeCartItem', props.idx);
    };

    return {
      quantity: computed(() => localQuantity.value),
      onChangeQuantity,
      onUpdateQuantity,
      onIncrementQuantity,
      onDecrementQuantity,
      onRemoveFromCart,
    };
  },
};
</script>
