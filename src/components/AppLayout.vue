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
<style lang="scss">
.layout {
  background-color: #ebebeb;
  height: 100vh;
  width: 100%;
}
.table-header {
  background-color: rgba(0, 0, 0, 0.03);
}
th:focus {
    outline: 0 !important;
}
</style>