<template>
    <div class="row">
        <div class="col-md-6">
        <form>
        <div class="form-group">
            <label for="email">Email address:</label>
            <input type="email" class="form-control" id="email" v-model="user.username">
        </div>
        <div class="form-group">
            <label for="pwd">Password:</label>
            <input type="password" class="form-control" id="pwd" v-model="user.password">
        </div>
        <button type="submit" class="btn btn-default" @click="clicked">Submit</button>
         </form>
        </div>
        <div class="col-md-6">
         <br>
         <button class="btn btn-info" @click="fetched">Fetch data</button>
         <br><hr>
        <ul class="list-group">
            <li class="list-group-item" v-for="usr in users" :key="usr">{{ usr.username }} - {{ usr.password }}</li>
        </ul>
        </div>
    </div>
</template>
<script>
export default {
  data () {
    return {
      user: {
        username: '',
        password: ''
      },
      users: []
    }
  },
  methods: {
    clicked () {
      this.$http.post('', this.user)
        .then(Response => {
          console.log(Response)
        }, Error => {
          console.log(Error)
        })
    },
    fetched () {
      this.$http.get('')
        .then(Response => {
          return Response.json()
        })
        .then(data => {
          const resultArray = []
          for (let k in data) {
            resultArray.push(data[k])
          }
          this.users = resultArray
        })
    }
  }
}

</script>
<style>

</style>
