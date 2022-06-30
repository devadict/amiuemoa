import axios from "axios";

const state = {
  users: [],
  user: null,
};

const getters = {
  allUsers: (state) => state.users,
  oneUser: (state) => state.user,
};

const actions = {
  async fetchUsers({ commit }) {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );

    commit("setUsers", response.data);
  },
  async fetchOneUser({ commit }) {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users/1"
    );

    commit("oneUser", response.data);
  },
  async addUser({ commit }, title) {
    const response = await axios.post(
      "https://jsonplaceholder.typicode.com/users",
      { title, completed: false }
    );

    commit("newUser", response.data);
  },
  async deleteUser({ commit }, id) {
    await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);

    commit("removeUser", id);
  },
  async filterUsers({ commit }, e) {
    // Get selected number
    const limit = parseInt(
      e.target.options[e.target.options.selectedIndex].innerText
    );

    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/users?_limit=${limit}`
    );

    commit("setUsers", response.data);
  },
  async updateUser({ commit }, updUser) {
    const response = await axios.put(
      `https://jsonplaceholder.typicode.com/users/${updUser.id}`,
      updUser
    );

    console.log(response.data);

    commit("updateUser", response.data);
  },
};

const mutations = {
  setUsers: (state, users) => (state.users = users),
  oneUser: (state, user) => (state.user = user),
  newUser: (state, user) => state.users.unshift(user),
  removeUser: (state, id) =>
    (state.users = state.users.filter((user) => user.id !== id)),
  updateUser: (state, updUser) => {
    const index = state.users.findIndex((user) => user.id === updUser.id);
    if (index !== -1) {
      state.users.splice(index, 1, updUser);
    }
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
