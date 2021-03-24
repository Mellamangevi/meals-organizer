<template>
  <v-footer padless absolute>
    <v-col
      class="text-center"
      cols="12"
    >
      {{ new Date().getFullYear() }} — <strong>Meals Organizer</strong>
    </v-col>
  </v-footer>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({})
export default class Footer extends Vue {
  
}
</script>
