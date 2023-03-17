import { fetchList, fetchUser, fetchItem } from "@/api";

export default {
  FETCH_LIST({ commit }, name) {
    fetchList(name)
      .then(({ data }) => {
        commit("SET_LIST", data);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  FETCH_USER({ commit }, userId) {
    fetchUser(userId)
      .then(({ data }) => {
        commit("SET_USER", data);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  FETCH_ITEM({ commit }, url) {
    fetchItem(url)
      .then(({ data }) => {
        commit("SET_ITEM", data);
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
