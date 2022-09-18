<template>
  <v-container class="fill-height">
    <v-row class="align-center justify-center">
      <v-col cols="5">
        <v-alert
            type="error"
            dismissible
            v-if="authError"
            data-cy="invalid-creds"
        >Invalid credentials</v-alert>
        <v-form
            ref="form"
            v-model="valid"
            data-cy="auth-form"
            @submit.prevent="auth"
        >
          <v-text-field
              v-model="email"
              :rules="validation.email"
              label="E-mail"
              data-cy="email-field"
              required
          ></v-text-field>

          <v-text-field
              v-model="password"
              :rules="validation.password"
              :type="showPassword ? 'text' : 'password'"
              :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
              label="Password"
              data-cy="password-field"
              required
              @click:append="showPassword = !showPassword"
          ></v-text-field>

          <div class="d-flex justify-space-between align-center">
            <a>Forgot password?</a>
            <v-btn
                :disabled="!valid"
                type="submit"
                color="primary"
                data-cy="submit-button"
            >
              Sign In
            </v-btn>
          </div>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import {mapState} from "vuex";
import {Validators, validationGroup} from "@/util/validation"

export default {
  name: 'SignIn',

  data: () => ({
    valid: false,
    showPassword: false,
    email: '',
    password: '',
    validation: {
      email: validationGroup('Email', Validators.required, Validators.email),
      password: validationGroup('Password', Validators.required, Validators.minLength(5))
    },
  }),
  computed: mapState({
    authError: state => state.auth.authError,
  }),
  methods: {
    auth() {
      this.$store.dispatch('auth/signIn', {email: this.email, password: this.password});
    }
  },
}
</script>
