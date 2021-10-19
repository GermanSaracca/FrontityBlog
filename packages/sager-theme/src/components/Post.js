import React from 'react'
import { connect, styled } from 'frontity'
import dayjs from 'dayjs'

const Post = ({ state }) => {
  const data = state.source.get(state.router.link)
  const post = state.source[data.type][data.id]
  const author = state.source.author[post.author]

  const formattedDate = dayjs(post.date).format('DD MMMM YYYY')

  return (
    <div>
      <h2>{post.title.rendered}</h2>
      <StyledPost>
        <p>
          <strong>Posted: </strong>
          {formattedDate}
        </p>
        <p>
          <strong>Author: </strong>
          {author.name}
        </p>
      </StyledPost>
      <hr />
      <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
    </div>
  )
}

export default connect(Post)

const StyledPost = styled.div`
  background-image: linear-gradient(to right, #f4f4f4, #fff);
  border: solid 2px #404040;
  border-left: 6px solid #404040;
  border-right: 6px solid #404040;
  border-radius: 12px;
  padding: 1rem;

  p {
    margin: 0;
  }
`
