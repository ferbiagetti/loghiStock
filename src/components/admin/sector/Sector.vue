<template>
  <b-row>
    <b-col xs="12" sm="6" md="4" xl="3">
      <new-sector @loadSector="loadNewSector" />
    </b-col>
    <b-col xs="12" sm="6" md="8" xl="9">
      <sector-list @deleteRow="deleteRow" :sectorList="sectorList" />
    </b-col>
  </b-row>
</template>
<script>
import NewSector from './NewSector.vue'
import SectorList from './SectorList.vue'
export default {
  components: { NewSector, SectorList },
  name: 'Sector',
  data () {
    return {
      sectorList: []
    }
  },
  methods: {
    loadNewSector (sector) {
      this.sectorList.push(sector)
      localStorage.setItem('sector', JSON.stringify(this.sectorList));
    },
    deleteRow (row) {
      this.sectorList = this.sectorList.filter(sector => sector.nombre !== row);
      this.$bvToast.toast('El rubro se elimino correctamente ', {
        title: `Exito`,
        variant: 'success',
        solid: true
      });
    }
  },
  created () {
    this.sectorList = localStorage.getItem('sector') ? JSON.parse(localStorage.getItem('sector')) : []
  }
}
</script>