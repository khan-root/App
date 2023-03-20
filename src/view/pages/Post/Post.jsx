import React from 'react'

const Post = () => {

    function handleClick(){
        console.log('Hello')
    }
  return (
      <button onClick={handleClick}>Post</button>
  )
}

export default Post