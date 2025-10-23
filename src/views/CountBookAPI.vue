<template>
  <pre>{{ jsondata }}</pre>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      jsondata: null,
      error: null,
    }
  },

  mounted() {
    this.getBookCountAPI()
  },

  methods: {
    async getBookCountAPI() {
      try {
        const response = await axios.get('https://countbooks-gdcnjix73q-uc.a.run.app')
        this.jsondata = response.data // only keep the data, not full response
        this.error = null
      } catch (error) {
        console.error('Error fetching book count:', error)
        this.error = error
        this.jsondata = null
      }
    },
  },
}
</script>
