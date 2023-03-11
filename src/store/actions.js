import { fetchNewsList, fetchAskList, fetchJobList } from "@/api";

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
};
