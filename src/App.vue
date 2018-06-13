<template>
<div id="app">
    <router-view/>
<app-quote></app-quote>
<app-user></app-user>
    <div class="row">
      <div class="col-md-4">
        <button class="btn btn-primary" @click="isSelected = 'app-quote'">Quote</button>
      </div>
      <div class="col-md-4">
        <button class="btn btn-info" @click="isSelected = 'app-info'">Info</button>
      </div>
      <div class="col-md-4">
        <button class="btn btn-warning" @click="isSelected = 'app-donate'">Donate</button>
      </div>
    </div>
    <component :is="isSelected">
      <p>You are welcome!</p>
    </component>
</div>
</template>

<script>
import User from './components/User.vue'
import Quote from './components/Quote.vue'
import Info from './components/Info.vue'
import Donate from './components/Donate.vue'
export default {
  data: () => {
    return {
      name: 'App',
      title: 'You are awesome',
      isSelected: 'app-quote'
    }
  },
  components: {
    'app-user': User,
    'app-quote': Quote,
    'app-info': Info,
    'app-donate': Donate
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
