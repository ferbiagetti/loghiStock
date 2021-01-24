<template>
  <b-card>
    <b-table
      :items="productList"
      :fields="['nombre', 'sector', 'action']"
      :small="true">
    
    <template #cell(nombre)="row">
      <span>{{row.item.name}}</span>
    </template>
    <template #cell(sector)="row">
      <span>{{row.item.sector}}</span>
    </template>
    <template #cell(action)="row">
      <b-button variant="danger" size="sm" @click="deleteRow(row.item.nombre)">
        <b-icon icon="trash" aria-hidden="true"></b-icon> Eliminar
      </b-button>
    </template>
    
    </b-table>
  </b-card>
</template>
<script>
export default {
  name: 'ProductList',
  props: {
    productList: Array
  },
  methods: {
    deleteRow (rowName) {
      this.$emit('deleteRow', rowName)
    }
  }
}
</script>