<template>
  <div class="layout">
    <navbar></navbar>
    <b-container fluid>
      <router-view/>
    </b-container>
  </div>
</template>
<script>
import Navbar from '@/components/shared/Navbar'
export default {
  components: { Navbar }
}
</script>
<style lang="scss" scoped>
.layout {
  background-color: #ebebeb;
  height: 100vh;
  width: 100%;
}
</style>