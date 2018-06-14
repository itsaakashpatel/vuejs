<template>
 <div>
        <h2> Quotes Hub </h2>
        <p>Max is 10</p>
        <div class="progress">
          <div class="progress-bar" :style="{width: current*10 + '%'}">
            {{ current }}</div>
        </div>
        <hr>
          <form action="">
            <div class="form-group">
              <label for="comment">Input your quote:</label>
              <textarea class="form-control" rows="5" id="quote" v-model="quote"></textarea>
            </div>
            <button type="button" class="btn btn-primary" @click="Add">Submit</button>
          </form>
    </div>
</template>
<script>
export default {
  data () {
    return {
      quote: ''
    }
  },
  methods: {
    Add () {
      this.$emit('newquoteadded', this.quote)
      this.quote = ''
    }
  },
  props: ['current', 'max']
}
</script>
<style>

</style>
