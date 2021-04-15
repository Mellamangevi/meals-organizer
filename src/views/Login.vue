<template>
  <div class="about">
    <v-btn @click="onLoginGoogle"> Google login </v-btn>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component
export default class Login extends Vue {
  async onLoginGoogle(){
    await this.$auth.googleSignIn();
  }
}
</script>
