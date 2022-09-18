import {signIn} from "@/api/auth";
import {ServerError} from "@/errors/ServerError";

const state = () => ({
    identity: null,
    authError: false,
});

const getters = {
    isAuthenticated(state) {
        return !!state.identity;
    }
};

const actions = {
    async signIn({commit}, payload) {
        commit('setAuthError', false);

        try {
            const {email, password} = payload;
            const {user} = await signIn(email, password);
            commit('setIdentity', user);
        } catch (e) {
            if (e instanceof ServerError && e.code === 401) {
                commit('setAuthError', true);
            }
        }
    }
};

const mutations = {
    setIdentity(state, user) {
        state.identity = user;
    },
    setAuthError(state, error) {
        state.authError = error;
    }
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
