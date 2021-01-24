<template>
  <b-card class="text-center" title="Nuevo Producto">
    <b-form @submit.prevent="onSubmitProduct">
      <b-form-group>
        <b-form-input
          id="product-name"
          v-model="form.name"
          :state="validateState('name')"
          type="text"
          placeholder="Ingrese el nombre del producto"
        ></b-form-input>
        <b-form-invalid-feedback id="password-error text-left">El nombre del producto es requerido</b-form-invalid-feedback>
      </b-form-group>

      <b-form-group>
        <b-form-select :state="validateState('sector')" v-model="form.sector" :options="sectionOptions"></b-form-select>
        <b-form-invalid-feedback id="password-error text-left">Seleccione un rubro</b-form-invalid-feedback>
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
      this.$v.form.$touch();
      if(this.$v.form.$error) {
        return;
      }
      const newProd = { name: this.form.name, sector: this.form.sector }
      this.$emit('newProduct', newProd)
      this.resetForm()
    },
    validateState(name) {
      const { $dirty, $error } = this.$v.form[name];
      return $dirty ? !$error : null;
    },
    resetForm() {
      this.form = {
        name: null,
        sector: null
      }
      this.$v.form.$reset()
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