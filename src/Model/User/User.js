import { axiosInstance } from "../utils/axiosInstance"


export const usersApi = {
    getAll: function(){
        return axiosInstance.request({
            method: 'GET',
            url: `/users`
        })
    }
}