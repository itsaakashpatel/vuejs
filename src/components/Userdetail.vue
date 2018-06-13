
<template>
<div class="user-detail">
    <h2>This is user detail component - child</h2>
    <h3>Your name is {{ name }}</h3>
    <p>Your age is {{ age }}</p>
    <button class="btn btn-warning" @click="resetName">Reset Name </button>
</div>
</template>

<script>
import { eventBus } from '../main.js'
export default {
  props: ['name', 'age'],
  methods: {
    resetName () {
      this.name = 'Aakash'
      this.$emit('namereset', this.name)
    }
  },
  created () {
    eventBus.$on('ageWasEdited', (data) => {
      this.age = data
    })
  }
}
</script>

<style scoped>
.user-detail{
    margin: 20px;
}
</style>
