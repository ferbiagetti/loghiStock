<template>
  <div class="nav-height">
    <b-navbar type="dark" variant="dark" class="nav-height">
      <b-nav-item href="#">Loghinet</b-nav-item>
      <b-navbar-nav class="ml-auto">
        <b-button @click="logout" class="logout-btn p-md-1 p-xs-0" variant="outline-danger" size="sm"><b-icon icon="power"></b-icon> Salir</b-button>
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

  .logout-btn {
    max-height: 4vh;
    padding: 0;
  }

  .nav-height {
    height: 5vh;
  }
</style>