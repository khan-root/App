import { usersApi } from "../../Model/User/User"


const userViewModal = (set, get)=>({
    users:[],
    fetchUsers: async () =>{
        const response = await usersApi.getAll()
        const data = response.data
        set({users: data})
    },
    
    
    
})

export default userViewModal