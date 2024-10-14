import axios from "axios";

export const baseApi = axios.create({
    withCredentials: true,
    baseURL: 'https://landing.mediakit.by/api/',
    headers: {
        'Content-Type': 'application/json',
    },
 })