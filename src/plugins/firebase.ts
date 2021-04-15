import store from '../store';
import Firebase from 'firebase';
import _Vue from 'vue';

const firebaseConfig = () => import('../../firebase.config');

export default {
    async install(Vue: typeof _Vue, options?: any){
        const config: any = await firebaseConfig();
        Firebase.initializeApp(config.default);
        const auth = Firebase.auth();
        Vue.prototype.$auth = {
            googleSignIn: async () => {
                const provider = new Firebase.auth.GoogleAuthProvider();
                await auth.signInWithPopup(provider);
            },
            logout: async () => {
                await auth.signOut();
            }
        };
        auth.onAuthStateChanged((user) => {
            store.commit('user/setCurrentCredentials', user);
            const isLoading = store.getters['user/isLoading'];
            if(isLoading){
                store.commit('user/setIsLoading', false);
            }
        });
    }
}
