import axios from "axios";

export default axios.create({
  baseURL: "https://rawg.io/api",
  params: {
    key: "611b08e53a984b5e8d391b71ef90c9d3",
  },
});
