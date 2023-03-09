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

export { fetchNewsList, fetchJobList, fetchAskList };
