// AJAX library
import axios from "axios";

const contactApi = {
  // POST /contacts {"name":"홍길동","num":"010-1111-1111","mail":""abc@naver.com}
  add: (data) => axios.post(`${process.env.REACT_APP_API_BASE}/contacts`, data),
  // GET / contacts
  fetch: () => axios.get(`${process.env.REACT_APP_API_BASE}/contacts`),
  // DELETE FROM contact WHERE id=dfd 이니까 id가 필요해
  remove: (id) =>
    axios.delete(`${process.env.REACT_APP_API_BASE}/contacts/${id}`),
  modify: (data) =>
    axios.put(`${process.env.REACT_APP_API_BASE}/contacts/${data.id}`, data),
};

export default contactApi;
