import React from 'react'
import { posts } from '../data'
import Card from './Card'

const Posts = () => {
   return (
      <div className="grid grid-cols-1 mb-12 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-6">
         {posts.map((post) => (
            <Card key={post.id} {...post} />
         ))}
      </div>
   )
}

export default Posts
