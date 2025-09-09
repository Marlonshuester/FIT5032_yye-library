<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
</script>

<template>
  <div class="container py-4">
    <div class="alert alert-warning d-flex justify-content-between align-items-center">
      <div>
        <h5 class="mb-1">Access Denied</h5>
        <p class="mb-0">You must be logged in to view this page.</p>
      </div>
      <button
        class="btn btn-primary"
        @click="router.push({ path: '/login', query: { redirect: '/about' } })"
      >
        Go to Login
      </button>
    </div>
  </div>
</template>
