<template>
  <v-app>
    <v-main>
      <SignIn/>
    </v-main>
  </v-app>
</template>

<script>
import SignIn from './components/SignIn';

export default {
  name: 'App',

  components: {
    SignIn,
  },

  data: () => ({
    //
  }),
};
</script>
