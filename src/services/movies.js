// import axios from "axios";
import { request } from "../configs/axios";

export const fetchMovieListAPI = () => {
    return request({
        url: 'QuanLyPhim/LayDanhSachPhim?maNhom=GP05',
        method: "GET",
    })
}

export const fetchMovieDetaiAPI = (maPhim) => {
    return request({
        url: `QuanLyPhim/LayThongTinPhim?MaPhim=${maPhim}`,
        method: "GET",
    })
}