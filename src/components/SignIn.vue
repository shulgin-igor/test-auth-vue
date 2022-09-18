<template>
  <v-container>
    <v-row class="text-end">
      <v-col cols="6">
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

          <v-btn
              :disabled="!valid"
              color="primary"
              class="mr-4"
              @click="auth"
          >
            Sign In
          </v-btn>
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
        console.log(this.$refs.form)
      }
    },
  }
</script>
