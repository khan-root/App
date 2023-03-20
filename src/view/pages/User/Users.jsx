import React, { memo, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setCounter } from '../../../viewModal/users_view_modal/userSlice'
import UserViewModal from '../../../viewModal/users_view_modal/UserViewModal'
import UserList from './UserList'

const MemoComp = memo(UserList)
const Users = () => {
  const dispatch = useDispatch()
  const {data: users, counter} = useSelector((state) => state.user)
  const { fetchUsers } = UserViewModal()
  useEffect(()=>{
    fetchUsers()
  },[])
  
  function handleCounter(){
    dispatch(setCounter())
  }

  return (

    <div>
      <span>User</span>
      <button onClick={handleCounter}>+</button>
      <span>{counter}</span>
      {users.map((user)=>{
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
      })}
    </div>
  )
}

export default Users