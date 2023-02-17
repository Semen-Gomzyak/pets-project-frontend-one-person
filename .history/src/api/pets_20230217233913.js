import axios from "axios";

const { REACT_APP_BASE_URL } = process.env

const getNews = async () => {
    return axios.get(`${REACT_APP_BASE_URL}/api/news`)
}