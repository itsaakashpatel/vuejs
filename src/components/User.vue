
<template>
<div class="container">
    <div class="jumbotron">
        <h1>This is user component - parent</h1>
        <h3>Your name is {{ name }}</h3>
        <p>Your age is {{ age }}</p>
        <button class="btn btn-primary" @click="changeName">Change Name</button>
            <hr>
        <div class=row>
                <div class="col-md-6 card bg-primary text-white">
        <app-user-detail :name="name" @namereset = "name = $event"></app-user-detail>
                </div>
                <div class="col-md-6 card bg-warning text-white">
        <app-user-edit :age="age"></app-user-edit>
                </div>
        </div>
    </div>
</div>
</template>

<script>
import Userdetail from './Userdetail'
import Useredit from './Useredit'
export default {
  data () {
    return {
      name: 'Aakash',
      age: 21
    }
  },
  methods: {
    changeName () {
      this.name = 'hello'
    }
  },
  components: {
    'app-user-detail': Userdetail,
    'app-user-edit': Useredit
  }
}
</script>
<style>
</style>
