<template>
<b-row class="full-height-col">
  <b-col class="m-auto" md="6" lg="3"  sm="6" xs="10">
    
    <div class="login-container">
        <h1 class="mt-3">Loghinet</h1>
        <hr/>
          <b-form @submit.prevent="onSubmitLogin" class="m-2">
            <b-form-group id="example-input-group-1">
              <b-form-input
                v-model="form.email"
                placeholder="Email"
                :state="validateState('email')"
                aria-describedby="email-error"
              ></b-form-input>

              <b-form-invalid-feedback id="email-error text-left">
                  El usuario es requerido
              </b-form-invalid-feedback>
            </b-form-group>

            <b-form-group id="example-input-group-1">
              <b-form-input
                v-model="form.password"
                placeholder="Password"
                :state="validateState('password')"
                aria-describedby="password-error"
              ></b-form-input>

              <b-form-invalid-feedback id="password-error text-left">La contrasena es requerida</b-form-invalid-feedback>
            </b-form-group>

            <b-form-checkbox v-model="status" class="text-left">
              Recordarme
            </b-form-checkbox>

            <b-button type="submit" variant="primary">Submit</b-button>
        </b-form>
    </div>

  </b-col>
</b-row>
</template>
<script>
import { validationMixin } from 'vuelidate'
import { required, minLength } from 'vuelidate/lib/validators'
export default {
  name: 'Login',
  data () {
    return {
      form: {
        email: null,
        password: null,
      },
      status: false,
    }
  },
  mixins: [validationMixin],
  methods: {
    validateState(name) {
      const { $dirty, $error } = this.$v.form[name];
      return $dirty ? !$error : null;
    },
    onSubmitLogin () {
      this.$v.form.$touch();
      if(this.$v.form.$error) {
        return;
      }
      localStorage.setItem('email', this.form.email);
      this.$router.go(this.$router.currentRoute)
    }
  },
  validations: {
    form: {
      email: {
        required,
        minLength: minLength(4)
      },
      password: {
        required
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.full-height-col {
  height: 100vh;
  width: 100%;
  padding: 0;
  background: linear-gradient(45deg, #58b9e3, #c9c9c9);
}

.row {
  margin: 0;
}

.col {
  margin-bottom: 10px;
}

h1 {
  color: #58b9e3;
}

.login-container {
  background-color: #d8d5d5;
  border: #d8d5d5 1px solid;
  border-radius: 15px;
  box-shadow: 10px 10px 5px #aaaaaa;
}

</style>