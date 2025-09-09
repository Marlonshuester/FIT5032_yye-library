// src/stores/auth.js
import { ref, computed } from 'vue'

const USERNAME = 'student'
const PASSWORD = 'fit5122'

// get auth ok info from localstorage
const isAuthed = ref(!!localStorage.getItem('auth_ok'))

function login(username, password) {
  if (username === USERNAME && password === PASSWORD) {
    isAuthed.value = true
    localStorage.setItem('auth_ok', '1')
    return { ok: true }
  }
  return { ok: false, message: 'Invalid username or password.' }
}

function logout() {
  isAuthed.value = false
  localStorage.removeItem('auth_ok')
}

export function useAuth() {
  return {
    isAuthenticated: computed(() => isAuthed.value),
    login,
    logout,
  }
}
