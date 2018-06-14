<template>
<div class="container">
   <app-quote v-for="quote in quotes" :key="quote">
      {{ quote }}
   </app-quote>
</div>
</template>
<script>
import Quote from './Quote.vue'
export default {
  props: ['quotes'],
  data () {
    return {
    }
  },
  methods: {
  },
  components: {
    'app-quote': Quote
  }
}

</script>
<style scoped lang="scss">
button {
  margin: 25px;
}
</style>
