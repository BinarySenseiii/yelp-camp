import React from 'react'
import PropTypes from 'prop-types'
import Card from './Card'

const Posts = ({ camps }) => {
   return (
      <div className="grid grid-cols-1 mb-12 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-6">
         {camps.map((camp) => (
            <Card key={camp.id} {...camp} />
         ))}
      </div>
   )
}

Posts.propTypes = {
   camps: PropTypes.array.isRequired,
}

export default Posts
