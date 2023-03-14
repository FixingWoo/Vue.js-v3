import axios from "axios";

// HTTP Request & Response와 관련된 설정
const config = {
  baseURL: "https://api.hnpwa.com/v0",
};

// API 함수 정리
function fetchNewsList() {
  return axios.get(`${config.baseURL}/news/1.json`);
}

function fetchJobList() {
  return axios.get(`${config.baseURL}/jobs/1.json`);
}

function fetchAskList() {
  return axios.get(`${config.baseURL}/ask/1.json`);
}

function fetchUser(userId) {
  return axios.get(`${config.baseURL}/user/${userId}.json`);
}

function fetchItem(itemId) {
  return axios.get(`${config.baseURL}/item/${itemId}.json`);
}

export { fetchNewsList, fetchJobList, fetchAskList, fetchUser, fetchItem };
