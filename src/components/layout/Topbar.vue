<template>
    <v-app-bar color="primary" dark fixed>
        <v-app-bar-nav-icon @click="onClick">
        </v-app-bar-nav-icon>

        <v-spacer>
        </v-spacer>


    </v-app-bar>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({})
export default class Topbar extends Vue {

    onClick(){
        this.$emit('toggleMenu');
    }
  
}
</script>