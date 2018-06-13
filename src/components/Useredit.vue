<template>
<div class="user-edit">
        <h2>This is user edit component - child</h2>
        <p>Your age is {{ age }}</p>
        <button class="btn btn-danger" @click="editAge">Edit Age </button>
</div>
</template>

<script>
import { eventBus } from '../main.js'
export default {
  props: ['age'],
  methods: {
    editAge () {
      this.age = 25
      eventBus.$emit('ageWasEdited', this.age)
    }
  }
}
</script>

<style scoped>
.user-edit{
    margin: 20px;
}
</style>
