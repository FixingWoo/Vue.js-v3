import { fetchList, fetchUser, fetchItem } from "@/api";

export default {
  async FETCH_LIST({ commit }, name) {
    const response = await fetchList(name);
    commit("SET_LIST", response.data);
    return response;
  },
  async FETCH_USER({ commit }, userId) {
    const response = await fetchUser(userId);
    commit("SET_USER", response.data);
    return response;
  },
  async FETCH_ITEM({ commit }, url) {
    const response = await fetchItem(url);
    commit("SET_ITEM", data);
    return response;
  },
};
