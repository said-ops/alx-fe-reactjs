import React from 'react'
import { useParams } from 'react-router-dom'

function BlogPost() {

    const {id} = useParams()

  return (
    <h2>Blog post id :{id}</h2>
  )
}

export default BlogPost