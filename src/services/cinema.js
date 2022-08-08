import { request } from "../configs/axios"

export const fetchMovieShowTimeAPI = (maPhim) =>{
    return request({
        url:`QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${maPhim}`,
        method: 'GET'
    })
}