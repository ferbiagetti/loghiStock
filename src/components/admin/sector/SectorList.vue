<template>
  <b-card>
    <b-table
      :items="sectorList"
      thead-class="table-header"
      :fields="[{key:'name', sortable: true, label: 'Sector'}, {key:'action', sortable: false, label: ''}]"
      :small="true"
      responsive="sm">
    
    <template #cell(nombre)="row">
      <span>{{row.item.name}}</span>
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
  name: 'SectorList',
  props: {
    sectorList: Array
  },
  methods: {
    deleteRow (rowName) {
      this.$emit('deleteRow', rowName)
    }
  }
}
</script>
<style lang="scss">
  .table thead th { 
    border-top: none !important;
  }
  
  table .flip-list{
  transition: transform 1s;
}
</style>