import React, { memo, useEffect, useState } from 'react'
import useStore from '../../../store/store'
import UserList from './UserList'

const MemoComp = memo(UserList)
const Users = () => {
  const users = useStore((state) => state.users)
  const fetchUsers = useStore((state)=> state.fetchUsers)
  useEffect(()=>{
    fetchUsers()
  },[])
  console.log(users)

  return (

    <div>
      <span>User</span>
      <button>+</button>
      {/* <span>{counter}</span> */}
      {/* {users.map((user)=>{
        return(
          <MemoComp 
            key={user.id}
            user= {user}
          />
          // <UserList 
          //   key={user.id}
          //   user= {user}
          // />
        )
      })} */}
    </div>
  )
}

export default Users