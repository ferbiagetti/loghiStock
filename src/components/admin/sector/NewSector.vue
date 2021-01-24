<template>
  <b-card class="text-center" header="Nuevo Rubro">
    <b-form @submit.prevent="onSubmitSector">
      <b-form-group
        id="sector-label-name"
        label-for="sector-name">
        <b-form-input
          id="sector-name"
          :state="validateState('name')"
          v-model="form.name"
          type="text"
          placeholder="Ingrese su rubro"
        ></b-form-input>
        <b-form-invalid-feedback id="password-error text-left">El nombre del rubro es requerido</b-form-invalid-feedback>
      </b-form-group>
      <b-button type="submit" variant="primary">Agregar</b-button>
    </b-form>
  </b-card>
</template>
<script>
import { validationMixin } from 'vuelidate'
import { required } from 'vuelidate/lib/validators'
export default {
  name: 'NewSector',
  mixins: [ validationMixin ],
  data () {
    return {
      form: {
        name: null,
      },
    }
  },
  methods: {
    onSubmitSector () {
      this.$v.form.$touch();
      if(this.$v.form.$error) {
        return;
      }
      const newSector = { name: this.form.name}
      this.$emit('loadSector', newSector)
      this.form.name = null
      this.$v.form.$reset()
    },
    validateState(name) {
      const { $dirty, $error } = this.$v.form[name];
      return $dirty ? !$error : null;
    },
  },
  validations: {
    form: {
      name: {
        required
      }
    }
  }
}
</script>