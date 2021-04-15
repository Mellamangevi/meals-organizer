import { Module } from 'vuex';
import { RootState } from "..";
import Firebase from "firebase";

type UserModuleState = {
    currentCredentials?: Firebase.User | null,
    isLoading: boolean,
};

const UserModule: Module<UserModuleState, RootState> = {
    namespaced: true,
    state: {
        currentCredentials: undefined,
        isLoading: true,
    },
    getters: {
        isLoggedIn(state) {
            return state.currentCredentials != null;
        },
        isLoading(state) {
            return state.isLoading;
        }
    },
    mutations: {
        setCurrentCredentials(state, credentials?: Firebase.User | null) {
            state.currentCredentials = credentials;
        },
        setIsLoading(state, isLoading: boolean) {
            state.isLoading = isLoading;
        }
    },
};

export default UserModule;