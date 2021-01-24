<template>
  <b-card class="text-center" title="Nuevo Producto">
    <b-form @submit.prevent="onSubmitProduct">
      <b-form-group>
        <b-form-input
          id="product-name"
          v-model="form.name"
          type="text"
          placeholder="Ingrese el nombre del producto"
        ></b-form-input>
      </b-form-group>

      <b-form-group>
        <b-form-select v-model="form.sector" :options="sectionOptions"></b-form-select>
      </b-form-group>
      
      <b-button type="submit" variant="primary">Agregar</b-button>
    </b-form>
  </b-card>
</template>
<script>
import { validationMixin } from 'vuelidate'
import { required } from 'vuelidate/lib/validators'
export default {
  name: 'NewProduct',
  mixins: [ validationMixin ],
  data () {
    return {
      form: {
        name: null,
        sector: null
      }
    }
  },
  methods: {
    onSubmitProduct () {
      const newProd = { name: this.form.name, sector: this.form.sector }
      this.$emit('newProduct', newProd)
    }
  },
  computed: {
    sectionOptions () {
      const options = localStorage.getItem('sector') ? JSON.parse(localStorage.getItem('sector')) : []
      const optionsAux = [ { value: null, text: "Seleccione un rubro" } ]
      options.forEach(element => {
        optionsAux.push({ value: element.name, text: element.name})
      });
      return optionsAux;
    }
  },
  validations: {
    form: {
      name: {
        required
      },
      sector: {
        required
      }
    }
  }
}
</script>