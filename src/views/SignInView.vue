<template>
  <v-container class="fill-height">
    <v-row class="align-center justify-center">
      <v-col cols="5">
        <v-form
            ref="form"
            v-model="valid"
        >
          <v-text-field
              v-model="email"
              :rules="emailRules"
              label="E-mail"
              required
          ></v-text-field>

          <v-text-field
              v-model="password"
              :rules="passwordRules"
              label="Password"
              type="password"
              required
          ></v-text-field>

          <div class="d-flex justify-space-between align-center">
            <a>Forgot password?</a>
            <v-btn
                :disabled="!valid"
                color="primary"
                @click="auth"
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
export default {
  name: 'SignIn',

  data: () => ({
    valid: false,
    email: '',
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
    ],
    password: '',
    passwordRules: [
      v => !!v || 'Password is required',
    ],
  }),
  methods: {
    auth() {
      this.$store.dispatch('auth/signIn', {email: this.email, password: this.password});
    }
  },
}
</script>
