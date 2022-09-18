import {signIn} from "@/api/auth";

const state = () => ({
    identity: null,
});

const getters = {
    isAuthenticated(state) {
        return !!state.identity;
    }
};

const actions = {
    async signIn({commit}, payload) {
        try {
            const {email, password} = payload;
            const {user} = await signIn(email, password);
            commit('setIdentity', user)
        } catch (e) {
            console.log('error', e)
        }
    }
};

const mutations = {
    setIdentity(state, user) {
        state.identity = user;
    }
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
