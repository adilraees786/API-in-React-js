import React from 'react'

const PostCard = (props) => {
  return (
    <div className='post-card'>
        <h1>{props.id}</h1>
        <h2>{props.title}</h2>
        <p>{props.body}</p>
    </div>
  )
}

export default PostCard