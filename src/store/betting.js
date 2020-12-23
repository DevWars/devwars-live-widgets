const state = {
    open: false,
    options: [],
    startAt: null,
    endAt: null,
};

const getters = {
    total(state) {
        return state.options.reduce((total, option) => total + option.total, 0);
    },
};

const mutations = {
    SET_STATE(state, betting) {
        state.open = betting.open;
        state.startAt = betting.startAt;
        state.endAt = betting.endAt;
        state.options = betting.options;
    },
};

const actions = {};

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions,
};
