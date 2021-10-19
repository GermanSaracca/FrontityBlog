//
import React from 'react'
import { connect } from 'frontity'

const Post = ({ state }) => {
  const data = state.source.get(state.router.link)
  const page = state.source[data.type][data.id]

  console.log('page')
  console.log(state.source)

  return (
    <div>
      <h2>{page.title.rendered}</h2>
      <div dangerouslySetInnerHTML={{ __html: page.content.rendered }} />
    </div>
  )
}

export default connect(Post)
