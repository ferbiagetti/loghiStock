<template>
  <div id="app">
    <app-layout v-if="isLogged" />
    <login  v-else />
  </div>
</template>
<script>
import AppLayout from './components/AppLayout.vue'
import Login from './components/login/Login.vue'
export default {
  components: {AppLayout, Login  },
  computed: {
    isLogged() {
      return localStorage.getItem('email')
    }
  }
}
</script>
<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');
#app {
  font-family: 'Open Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  padding: 0;
}

</style>
