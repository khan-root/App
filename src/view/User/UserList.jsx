import React from 'react'

const UserList = (props) => {
  const {user} = props
    
  return (
    <div>
        <p>{user.name}</p>
    </div>
  )
}

export default UserList

