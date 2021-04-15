<template>
    <v-app-bar color="primary" dark fixed>
        <v-app-bar-nav-icon v-if="isLoggedIn" @click="onClick">
        </v-app-bar-nav-icon>

        <v-spacer>
        </v-spacer>

        <v-btn @click="onLogout" v-if="isLoggedIn" color="danger">Logout</v-btn>
    </v-app-bar>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { namespace } from 'vuex-class';

const userModule = namespace('user');

@Component({})
export default class Topbar extends Vue {
    @userModule.Getter('isLoggedIn') isLoggedIn: boolean;

    onClick(){
        this.$emit('toggleMenu');
    }

    async onLogout() {
        await this.$auth.logout()
    }
}
</script>