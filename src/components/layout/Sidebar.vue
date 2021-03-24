<template>
    <v-navigation-drawer
      v-model="menuOpen"
      fixed
      top
      temporary
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group
          v-model="group"
          active-class="primary"
        >
            <v-list-item to="/">
                <v-list-item-icon>
                    <v-icon>fa-home</v-icon>
                </v-list-item-icon>
                <v-list-item-title>Home</v-list-item-title>
            </v-list-item>

            <v-list-item to="/about">
                <v-list-item-icon>
                    <v-icon>fa-hippo</v-icon>
                </v-list-item-icon>
                <v-list-item-title>About</v-list-item-title>
            </v-list-item>

        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component({})
export default class Sidebar extends Vue {
    group: number[] = [];

    @Prop() value: boolean;

    get menuOpen(){
        return this.value;
    }
    set menuOpen(menuOpen: boolean){
        this.$emit('input', menuOpen);
    }  
}
</script>
