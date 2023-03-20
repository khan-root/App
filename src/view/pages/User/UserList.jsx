import React from 'react'

const UserList = ({user}) => {
    console.log('User List')
    
  return (
    <div>
        <p>{user.name}</p>
    </div>
  )
}

export default UserList