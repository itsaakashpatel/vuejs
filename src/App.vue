<template>
<div id="app">
  <div class="container">
    <router-view></router-view>
        <animations></animations>
    <app-new-quote @newquoteadded="quotePush" :current="current" :max="max"></app-new-quote>
    <app-quote-grid :quotes="quotes"></app-quote-grid>
    <app-user></app-user>
    <app-http></app-http>
  </div>
</div>
</template>

<script>
import User from './components/User.vue'
import QuoteGrid from './components/QuoteGrid.vue'
import NewQuote from './components/NewQuote.vue'
import Animations from './components/Animations.vue'
import Http from './components/Http.vue'
export default {
  data () {
    return {
      quotes: ['hello user'],
      max: 10,
      current: 1
    }
  },
  components: {
    'app-user': User,
    'app-quote-grid': QuoteGrid,
    'app-new-quote': NewQuote,
    'animations': Animations,
    'app-http': Http
  },
  methods: {
    quotePush (quote) {
      if (this.current >= this.max) {
        return alert('YOu have reached the limit!')
      }
      this.quotes.push(quote)
      this.current++
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
