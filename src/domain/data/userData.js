import { axiosInstance } from "../axiosInstance"

export const usersApi = {
    getAll: function(){
        return axiosInstance.request({
            method: 'GET',
            url: `/users`
        })
    }
}