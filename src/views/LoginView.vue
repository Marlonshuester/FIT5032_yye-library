<script setup>
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useAuth } from '@/stores/auth'

const router = useRouter()
const route = useRoute()
const { login, isAuthenticated } = useAuth()

const form = ref({ username: '', password: '' })
const error = ref('')

async function onSubmit() {
  error.value = ''
  const res = login(form.value.username.trim(), form.value.password)
  if (res.ok) {
    // login successfully: redirect to AboutView
    const go = route.query.redirect || '/about'
    router.replace(go)
  } else {
    error.value = res.message || 'Login failed.'
  }
}
</script>

<template>
  <div class="container py-4" style="max-width: 480px">
    <h3 class="mb-3">Login</h3>

    <div v-if="isAuthenticated" class="alert alert-success">
      You are already logged in. <router-link to="/about">Go to About</router-link>
    </div>

    <form @submit.prevent="onSubmit" v-else>
      <div class="mb-3">
        <label class="form-label">Username</label>
        <input v-model="form.username" class="form-control" placeholder="student" />
      </div>

      <div class="mb-3">
        <label class="form-label">Password</label>
        <input v-model="form.password" type="password" class="form-control" placeholder="fit5122" />
      </div>

      <button class="btn btn-primary w-100" type="submit">Sign in</button>

      <div v-if="error" class="alert alert-danger mt-3">{{ error }}</div>

      <div class="form-text mt-3">
        Hint: <code>student / fit5122</code> (hardcoded for this exercise)
      </div>
    </form>
  </div>
</template>
