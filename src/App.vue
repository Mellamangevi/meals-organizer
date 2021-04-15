<template>
  <v-app>
    <Layout>
      <v-main>
        <v-progress-circular v-if="isLoading" />
        <Login v-else-if="!isLoggedIn" />
        <router-view v-else />
      </v-main>
    </Layout>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Layout from "@/components/Layout.vue";
import Login from '@/views/Login.vue';
import { namespace } from 'vuex-class';

const userModule = namespace('user');

@Component({
  components: {
    Layout,
    Login,
  }
})
export default class App extends Vue {
  @userModule.Getter('isLoading') isLoading: boolean;
  @userModule.Getter('isLoggedIn') isLoggedIn: boolean;
}
</script>
