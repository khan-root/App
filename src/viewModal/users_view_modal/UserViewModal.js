import { useDispatch } from "react-redux"
import { usersApi } from "../../domain/data/userData"
import { setUsers } from "./userSlice"

const UserViewModal = () => {
  const dispatch = useDispatch()
  async function fetchUsers (){
    const response = await usersApi.getAll()
    const data = response.data
    dispatch(setUsers(data))
  }
  return {fetchUsers}
}

export default UserViewModal