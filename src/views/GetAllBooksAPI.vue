<template>
  <div class="container">
    <h1>All Books</h1>

    <div v-if="error" class="error">
      <p>Error fetching books: {{ error }}</p>
    </div>

    <div v-else-if="books">
      <pre>{{ books }}</pre>
    </div>

    <div v-else>
      <p>Loading...</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'GetAllBookAPI',
  data() {
    return {
      books: null,
      error: null,
    }
  },
  async mounted() {
    await this.getAllBooks()
  },
  methods: {
    async getAllBooks() {
      try {
        const response = await axios.get('https://getallbooks-gdcnjix73q-uc.a.run.app')
        this.books = JSON.stringify(response.data, null, 2)
      } catch (error) {
        console.error('Error fetching books:', error)
        this.error = error.message
      }
    },
  },
}
</script>
