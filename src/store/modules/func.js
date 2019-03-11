const func = {
    state: {
        firstMenuIndex: 3
    },
    mutations: {
        SHOW_SECOND_MENU : (state,data) => {
            state.firstMenuIndex = parseInt(data)
        }
    },
    actions: {
        GetMenuIndex({ commit }, data) {
            return new Promise ( resolve => {
                commit('SHOW_SECOND_MENU', data)
                resolve()
            }) 
        }
    }
}

export default func