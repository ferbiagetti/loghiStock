<template>
  <div class="mt-3">
    <b-tabs content-class="m-3" fill>
      <b-tab title="Sector" active><sector /></b-tab>
      <b-tab title="Productos"><product/></b-tab>
    </b-tabs>
  </div>
</template>
<script>
import Product from './product/Product.vue'
import Sector from './sector/Sector.vue'
export default {
  components: { Sector, Product },
  name: 'Admin'
}
</script>
<style lang="scss">
.nav-tabs {
  color: #5cb9ce !important;
  a {
    color: #5cb9ce !important;
  }
}

.nav-tabs .nav-link.active, .nav-tabs .nav-item.show .nav-link {
  background-color: #ebebeb !important;
  color: gray !important;
  border-color: #dee2e6 #dee2e6 #ebebeb !important;
}

.tabs {
  min-height: 90vh;
}


</style>