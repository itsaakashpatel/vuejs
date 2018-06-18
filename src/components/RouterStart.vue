<template>
<div>
    <h3>Router Start</h3>
    <ul class="list group">
        <router-link class="list-group-item" tag="li" to="/user/1">Router 1</router-link>
        <router-link class="list-group-item" tag="li" to="/user/2">Router 2</router-link>
        <router-link class="list-group-item" tag="li" to="/user/3">Router 3</router-link>
    </ul>
    <h4>Counter is {{ counter }}</h4>
    <button class="btn btn-warning" @click="Increase">Increase</button>
</div>
</template>
<script>
export default {
  methods: {
    Increase () {
      this.$store.state.counter++
    }
  },
  computed: {
    counter () {
      return this.$store.getters.doubleNumber
    }
  }
}
</script>
<style>
</style>
