import { Module } from 'vuex';
import { RootState } from "..";
import Firebase from "firebase";
import { SignInRequest } from '@/types';

type UserModuleState = {
    currentCredentials?: Firebase.auth.UserCredential,
    isLoading: boolean,
};

const UserModule: Module<UserModuleState, RootState> = {
    namespaced: true,
    state: {
        currentCredentials: undefined,
        isLoading: false,
    },
    getters: {
        isLoggedIn(state) {
            return state.currentCredentials != null;
        },
        getCurrentUserName(state) {
            return state.currentCredentials?.user?.displayName;
        },
    },
    mutations: {
        setCurrentCredentials(state, credentials: Firebase.auth.UserCredential | undefined) {
            state.currentCredentials = credentials;
        },
        setIsLoading(state, isLoading: boolean) {
            state.isLoading = isLoading;
        }
    },
    actions: {
        async signIn(context, request: SignInRequest) {
            context.commit('setIsLoading', true);
            try {
                const credentials = await Firebase.auth().signInWithEmailAndPassword(request.email, request.password);
                context.commit('setCurrentCredentials', credentials);
            } catch (error) {
                console.log(error);
            }
            context.commit('setIsLoading', false);
        }
    }

}