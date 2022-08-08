// import axios from "axios";
import { request } from "../configs/axios";

export const fetchMovieListAPI = () => {
    return request({
        url: 'QuanLyPhim/LayDanhSachPhim?maNhom=GP01',
        method: "GET",
    })
}

export const fetchMovieDetaiAPI = (maPhim) => {
    return request({
        url: `QuanLyPhim/LayThongTinPhim?MaPhim=${maPhim}`,
        method: "GET",
    })
}