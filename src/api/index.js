import axios from "axios";

// HTTP Request & Response와 관련된 설정
const config = {
  baseURL: "https://api.hnpwa.com/v0",
};

// API 함수 정리
function fetchList(name) {
  return axios.get(`${config.baseURL}/${name}/1.json`);
}

function fetchUser(userId) {
  return axios.get(`${config.baseURL}/user/${userId}.json`);
}

function fetchItem(itemId) {
  return axios.get(`${config.baseURL}/item/${itemId}.json`);
}

export { fetchUser, fetchItem, fetchList };
