const state = {
    open: false,
};

const mutations = {
    SET_STATE(state, voting) {
        state.open = voting.open;
    },
};

export default {
    namespaced: true,
    state,
    mutations,
};
