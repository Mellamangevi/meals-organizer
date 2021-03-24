<template>
  <v-app>
    <Layout>
      <v-main>
        <router-view />
      </v-main>
    </Layout>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Layout from "@/components/Layout.vue"

@Component({
  components: {
    Layout,
  }
})
export default class App extends Vue {

}
</script>
