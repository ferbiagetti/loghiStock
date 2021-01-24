<template>
  <div class="nav-height">
    <b-navbar type="dark" variant="dark" class="nav-height">
      <b-nav-item href="#">Loghinet</b-nav-item>
      <b-navbar-nav class="ml-auto">
      <b-button @click="logout" variant="outline-danger">
        <b-icon icon="power"></b-icon> Salir
      </b-button>
      </b-navbar-nav>
    </b-navbar>

  </div>
</template>
<script>
export default {
  name: 'Navbar',
  methods: {
    logout () {
      localStorage.clear()
      this.$router.go(this.$router.currentRoute)
    }
  }
}
</script>
<style lang="scss" scoped>
  .nav-item {
    font-size: 1rem;
    list-style-type: none;
    a {
      color: #5cb9ce;
    }
  }

  .nav-height {
    height: 5vh;
  }
</style>