<template>
  <div class="about">
    <h3>About Our Library(Members Only)</h3>
    <p v-if="isAuthenticated">
      Welcome to our digital library! We're dedicated to providing a vast collection of books and
      resources to our community. This page is visible only to authenticated users.
    </p>
  </div>
</template>

<script setup>
import { useAuth } from '@/stores/auth'
const { isAuthenticated } = useAuth()
</script>

<style></style>
