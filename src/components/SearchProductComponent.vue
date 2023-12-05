<template>
  <div class="card">
    <div class="card-body">
      <div class="position-relative">
        <input
          type="text"
          class="form-control search-input"
          placeholder="O que procura hoje?"
          v-model="searchTerm"
          @input="onChangeTerm"
        />
        <button type="submit" class="position-absolute btn-search text-dark">
          <font-awesome-icon :icon="['fas', 'search']" size="xl" />
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.search-input {
  padding-right: 50px;
}
.btn-search {
  background: none;
  border: none;
  right: 0;
  top: 0;
  padding: 7px 12px;
}
</style>

<script lang="ts">
import { ref, defineComponent } from 'vue';

export default defineComponent({
  setup(_, { emit }) {
    const searchTerm = ref('');

    const onChangeTerm = () => {
      emit('onSearchProducts', searchTerm.value);
    };

    return {
      searchTerm,
      onChangeTerm,
    };
  },
});
</script>
