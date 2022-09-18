import Vuex from 'vuex'
import auth from './modules/auth'
import Vue from "vue";

const debug = process.env.NODE_ENV !== 'production'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        auth,
    },
    strict: debug,
    plugins: debug ? [Vuex.createLogger()] : []
})
