import useStore from "../../store/store"

export const useUsers = ()=>{
    const users = useStore((state) => state.users)
    const fetchUsers = useStore((state)=> state.fetchUsers)


    return{ users, fetchUsers}
}