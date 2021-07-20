import axios from 'axios';
axios.defaults.baseURL = 'https://api.hnpwa.com/v0/';

const API_ENDPOINTS = {
  NEWS: '/news',
  NEWEST: '/newest',
  ASK: '/ask',
  SHOW: '/show',
  JOBS: '/jobs',
};

export async function fetchNews(page = 1) {
  try {
    const { data } = await axios.get(`${API_ENDPOINTS.NEWS}/${page}.json`);
    return data;
  } catch (error) {
    return [];
  }
}

export async function fetchNewest(page = 1) {
  try {
    const { data } = await axios.get(`${API_ENDPOINTS.NEWEST}/${page}.json`);
    return data;
  } catch (error) {
    return [];
  }
}

export async function fetchAsk(page = 1) {
  try {
    const { data } = await axios.get(`${API_ENDPOINTS.ASK}/${page}.json`);
    return data;
  } catch (error) {
    return [];
  }
}
