<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="container vh-100">
    <div class="row h-100 justify-content-center align-items-center">
      <div class="col-md-6 col-xl-5">
        <div class="card">
          <div class="card-header p-3">
            <h5 class="text-center mb-0 text-uppercase">Acesso ao sistema</h5>
          </div>
          <div class="card-body">
            <div class="alert alert-dismissible alert-danger" v-if="loginError">
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="alert"
              ></button>
              <h4 class="alert-heading">Ooops!</h4>
              <p class="mb-0">Erro ao fazer login, tente novamente.</p>
            </div>
            <form @submit.prevent="onLoginSubmit">
              <div class="mb-3">
                <label for="username" class="form-label">Usuário</label>
                <input
                  type="text"
                  class="form-control"
                  id="username"
                  name="username"
                  required
                  v-model="loginForm.email"
                />
              </div>
              <div class="mb-3">
                <label for="password" class="form-label">Senha</label>
                <input
                  type="password"
                  class="form-control"
                  id="password"
                  name="password"
                  required
                  v-model="loginForm.password"
                />
              </div>
              <div class="d-grid">
                <button type="submit" class="btn btn-primary">Entrar</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';

import api from '@/services/api';

const router = useRouter();

const loginForm = ref({ email: '', password: '' });
const loginError = ref(false);

const onLoginSubmit = async () => {
  try {
    const response = await api.post('/login', loginForm.value);
    localStorage.setItem('token', response.data.token);
    router.push('/');
  } catch (err) {
    loginError.value = true;
    console.log(err);
  }
};
</script>
