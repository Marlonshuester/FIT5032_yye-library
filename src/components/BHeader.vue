<script setup>
import { useRouter } from 'vue-router'
import { useAuth } from '@/stores/auth'

const router = useRouter()
const { isAuthenticated, logout } = useAuth()

function onLogout() {
  logout()
  router.push('/login')
}
</script>

<!-- <template> -->
<!-- Using Bootstrap's Header template (starter code) -->
<!-- https://getbootstrap.com/docs/5.0/examples/headers/ -->
<!-- <div class="container">
    <header class="d-flex justify-content-center py-3">
      <ul class="nav nav-pills">
        <li class="nav-item">
          <router-link
            to="/"
            class="nav-link"
            active-class="active"
            aria-current="page"
            >Home (Week 5)</router-link
          >
        </li>
        <li class="nav-item">
          <router-link to="/about" class="nav-link" active-class="active"
            >About</router-link
          >
        </li>
      </ul>
    </header>
  </div> -->
<!-- </template> -->

<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary mb-3">
    <div class="container">
      <router-link class="navbar-brand" to="/">LibraryApp</router-link>

      <div class="collapse navbar-collapse show">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link" to="/">Home</router-link>
          </li>

          <li>
            <router-link to="/FireLogin" class="nav-link" active-class="active"
              >Firebase Login</router-link
            >
          </li>
          <li>
            <router-link to="/FireRegister" class="nav-link" active-class="active"
              >Firebase Register</router-link
            >
          </li>

          <!-- /about -->
          <li class="nav-item" v-if="isAuthenticated">
            <router-link class="nav-link" to="/about">About</router-link>
          </li>
          <li class="nav-item" v-else>
            <a class="nav-link disabled" aria-disabled="true" title="Login required">About</a>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/addBook">Add Book</router-link>
          </li>
        </ul>

        <div class="d-flex gap-2">
          <router-link v-if="!isAuthenticated" class="btn btn-outline-primary" to="/login">
            Login
          </router-link>
          <button v-else class="btn btn-outline-danger" @click="onLogout">Logout</button>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.b-example-divider {
  height: 3rem;
  background-color: rgba(0, 0, 0, 0.1);
  border: solid rgba(0, 0, 0, 0.15);
  border-width: 1px 0;
  box-shadow:
    inset 0 0.5em 1.5em rgba(0, 0, 0, 0.1),
    inset 0 0.125em 0.5em rgba(0, 0, 0, 0.15);
}

.form-control-dark {
  color: #fff;
  background-color: var(--bs-dark);
  border-color: var(--bs-gray);
}
.form-control-dark:focus {
  color: #fff;
  background-color: var(--bs-dark);
  border-color: #fff;
  box-shadow: 0 0 0 0.25rem rgba(255, 255, 255, 0.25);
}

.bi {
  vertical-align: -0.125em;
  fill: currentColor;
}

.text-small {
  font-size: 85%;
}

.dropdown-toggle {
  outline: 0;
}
</style>
