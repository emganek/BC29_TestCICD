import { request } from "../configs/axios"

export const loginAPI = (data) =>{
    return request({
        url:'QuanLyNguoiDung/DangNhap',
        method: 'POST',
        data: data,
    })
}