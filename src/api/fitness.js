import axios from "axios";

const fitnessApi = {
  // POST /fitness {"name":"홍길동","num":"010-1111-1111","mail":""abc@naver.com}
  add: (data) => axios.post(`${process.env.REACT_APP_API_BASE}/fitness`, data),
  // GET / fitness
  fetch: () => axios.get(`${process.env.REACT_APP_API_BASE}/fitness`),
  fetchPaging: (page, size) =>
    axios.get(
      `${process.env.REACT_APP_API_BASE}/fitness/paging?page=${page}&size=${size}`
    ),

  // DELETE FROM fitness WHERE id=dfd 이니까 id가 필요해
  remove: (id) =>
    axios.delete(`${process.env.REACT_APP_API_BASE}/fitness/${id}`),
  modify: (data) =>
    axios.put(`${process.env.REACT_APP_API_BASE}/fitness/${data.id}`, data),
};

export default fitnessApi;
