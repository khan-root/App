import React, {  useEffect } from 'react'
import { useUsers } from '../../viewModal/usersViewModel/userServices'
import UserList from './UserList'



const Users = () => {

  const {users, fetchUsers} = useUsers()
  
  useEffect(()=>{
    fetchUsers()
  },[])

  return (

    <div>
      {users.map((user)=>(
          <UserList 
            key={user.id}
            user= {user}
          />
      ))}
    </div>
  )
}

export default Users