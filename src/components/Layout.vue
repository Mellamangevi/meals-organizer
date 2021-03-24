<template>
    <div>
        <Topbar @toggleMenu="onToggleSidebarOpen" />
        <Sidebar v-model="isSidebarOpen" />
        <v-container class="mt-16">
            <slot></slot>
        </v-container>
        <Footer />
    </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Topbar from "./layout/Topbar.vue";
import Sidebar from "./layout/Sidebar.vue";
import Footer from "./layout/Footer.vue";

@Component({
    components: {
        Topbar,
        Sidebar,
        Footer,
    }
})
export default class Layout extends Vue {
  isSidebarOpen = false;

  onToggleSidebarOpen(){
      this.isSidebarOpen = !this.isSidebarOpen;
  }
}
</script>
