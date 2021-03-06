import actions from './actions.js';
import getters from './getters.js';
import mutations from './mutations.js';

export default{
    state() {
      return {
        name: null,
        firstName: null,
        lastName: null,
        email: null,
        access_token: null,
        userId: '',
        expiresIn: null,
        isAuth: false,
        didAutoLogout: false,
      };
    },
    mutations,
    actions, 
    getters
};