import Vue from 'vue';

interface auth {
    googleSignIn: () => Promise<void>;
    logout: () => Promise<void>;
}

declare module 'vue/types/vue' {
    interface Vue {
        $auth: auth;
    }
}

