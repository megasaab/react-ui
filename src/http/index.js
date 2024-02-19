import axios from "axios";

export const REST_BASE_URL = window.location.protocol + '//' + window.location.hostname + ':' + '8080';

export async function login(loginDto) {
    return axios.post(`${REST_BASE_URL}/login`, loginDto);
}

export async function getProducts(products) {
    return axios.get(`${REST_BASE_URL}/products`);
}