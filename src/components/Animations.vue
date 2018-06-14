<template>
<div>
    <h2> Animations and Transitions </h2>
    <button class="btn btn-info" @click="clickme">Click Me</button>
    <transition name="fade">
    <div class="alert alert-danger" v-if="show">This is alert box</div>
    </transition>
</div>
</template>
<script>
export default {
  data () {
    return {
      show: false
    }
  },
  methods: {
    clickme () {
      this.show = !this.show
    }
  }
}
</script>
<style scoped>
 .btn-info {
     margin: 15px;
 }

 .fade-enter{
    opacity: 0;
 }
 .fade-enter-active{
    transition: opacity 2s;
 }
 .fade-leave{
    transition: opacity 2s;
 }
 .fade-leave-active{
    opacity: 0;
 }
</style>
