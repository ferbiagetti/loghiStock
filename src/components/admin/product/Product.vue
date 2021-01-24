<template>
  <b-row>
    <b-col xs="12" sm="6" md="4" xl="3">
      <new-product  @newProduct="addProduct" />
    </b-col>
    <b-col xs="12" sm="6" md="8" xl="9">
      <product-list  @deleteRow="deleteRow" :productList="productList" />
    </b-col>
  </b-row>
</template>
<script>
import NewProduct from './NewProduct.vue'
import ProductList from './ProductList.vue';
export default {
  components: { NewProduct, ProductList },
  name: 'Product',
  data(){
    return {
      productList: []
    }
  },
  methods: {
    addProduct (product) {
      this.productList.push(product);
      localStorage.setItem('products', JSON.stringify(this.productList));
    },
    deleteRow (row) {
      this.sectorList = this.productList.filter(prod => prod.nombre !== row);
      this.$bvToast.toast('El producto se elimino correctamente ', {
        title: `Exito`,
        variant: 'success',
        solid: true
      });
    }
  }
}
</script>