<template>
<div>
    <h2>Router Demo</h2>
    <hr>
    <p>Loaded id: {{ id }}</p>
    <button class="btn btn-primary" @click="goToHome">Go to Home</button>
    <hr>
    <router-view></router-view>
</div>
</template>
<script>
export default {
  data () {
    return {
      id: this.$route.params.id
    }
  },
  methods: {
    goToHome () {
      this.$router.push('/')
    }
  }
}
</script>
<style>

</style>
