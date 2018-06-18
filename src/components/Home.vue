
<template>
<div>
    <h2>Hello User</h2>
    <ul class="nav nav-pills">
        <router-link class="nav-item" tag="li" to="/" active-class="active" exact><a>Home</a></router-link>
        <router-link class="nav-item" tag="li" to="/router"><a>Router</a></router-link>
    </ul>
</div>
</template>
<script>
export default {
}
</script>
<style scoped>
</style>
