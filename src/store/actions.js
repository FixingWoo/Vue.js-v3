import {
  fetchNewsList,
  fetchAskList,
  fetchJobList,
  fetchUser,
  fetchItem,
} from "@/api";

export default {
  FETCH_NEWS(context) {
    fetchNewsList()
      .then((response) => {
        context.commit("SET_NEWS", response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  FETCH_ASK(context) {
    fetchAskList()
      .then((response) => {
        context.commit("SET_ASK", response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  FETCH_JOBS(context) {
    fetchJobList()
      .then((response) => {
        context.commit("SET_JOBS", response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  FETCH_USER({ commit }, userId) {
    fetchUser(userId)
      .then((response) => {
        commit("SET_USER", response.data);
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
