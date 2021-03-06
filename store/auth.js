import { Auth } from "aws-amplify";

export const state = () => ({
  isAuthenticated: false,
  user: null,
});

export const mutations = {
  set(state, user) {
    state.isAuthenticated = !!user;
    state.user = user;
  },
};

export const actions = {
  async load({ commit, dispatch }) {
    try {
      const user = await Auth.currentAuthenticatedUser();
      commit("set", user);

      if (user) return user;
    } catch (error) {
      commit("set", null);
    }
  },

  async register(_, { email, password, creator_id, name }) {
    const user = await Auth.signUp({
      username: email,
      password,
      attributes: {
        name: name,
      },
    });
    return user;
  },

  async confirmRegistration(_, { email, code }) {
    return await Auth.confirmSignUp(email, code);
  },

  async login({ commit, dispatch }, { email, password }) {
    const user = await Auth.signIn(email, password);
    commit("set", user);

    if (
      (await dispatch("user/findOrCreateUser", user, { root: true })) != null
    ) {
      return user;
    } else {
      await Auth.signOut();
      commit("set", null);
    }

    return user;
  },

  async logout({ commit }) {
    await Auth.signOut();
    commit("set", null);
  },
};
