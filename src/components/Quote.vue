<template>
<div class="row">
  <div class="col-md-4 col-lg-3">
      <div class="card">
  <div class="card-body"><slot></slot></div>
</div>
<h2>Filters Demo</h2>
<input type="text" v-model="filterText">
<ul>
  <li v-for="name in filterNames" :key="name">{{ name }}</li>
</ul>
   </div>
</div>
</template>
<script>
export default {
  data () {
    return {
      names: ['aakash', 'anant', 'chetan', 'khemu'],
      filterText: ''
    }
  },
  computed: {
    filterNames () {
      return this.names.filter((element) => {
        return element.match(this.filterText)
      })
    }
  }
}
</script>
<style>

</style>
