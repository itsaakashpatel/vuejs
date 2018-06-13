<template>
<div class="container">
    <div>
        <h2> Quotes Hub </h2>
        <p>Max is 10</p>
        <div class="progress">
          <div class="progress-bar" :style="{width: current*10 + '%'}">{{ current }}</div>
        </div>
        <hr>
          <h3>Input Your Quote</h3>
          <input type="text" v-model="data">
          <button class="btn btn-primary" @click="Add">Add</button>
    </div>
    <app-info></app-info>
</div>
</template>
<script>
import Info from './Info.vue'
export default {
  props: ['quote'],
  data: () => {
    return {
      max: 10,
      current: 0,
      textdata: 'You are writing...'
    }
  },
  methods: {
    Add () {
    }
  },
  components: {
    'app-info': Info
  }
}

</script>
<style scoped>
button {
  margin: 25px;
}
</style>
