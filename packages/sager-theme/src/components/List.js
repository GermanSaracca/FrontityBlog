//

import React from 'react'
import { connect, styled } from 'frontity'
import Link from '@frontity/components/link'

const List = ({ state }) => {
  const data = state.source.get(state.router.link)

  return (
    <StyledList>
      {data.items.map((item) => {
        const post = state.source[item.type][item.id]

        return (
          <li key={item.id}>
            <Link link={post.link}>{post.title.rendered}</Link>
          </li>
        )
      })}
    </StyledList>
  )
}

export default connect(List)

const StyledList = styled.ul`
  list-style-type: disc;

  li {
    &:not(:last-child) {
      margin-bottom: 0.5rem;
    }
    &::marker {
      color: orange;
    }
    a {
      color: orange;
    }
  }
`
