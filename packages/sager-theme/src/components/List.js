//

import React from 'react'
import { connect, styled } from 'frontity'
import Link from '@frontity/components/link'

const List = ({ state, actions }) => {
  const data = state.source.get(state.router.link)

  console.log(data)

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
      <PrevNextNav>
        {data.previous && (
          <button
            onClick={() => {
              actions.router.set(data.previous)
            }}
          >
            &#171; Prev
          </button>
        )}
        {data.next && (
          <button
            onClick={() => {
              actions.router.set(data.next)
            }}
          >
            Next &#187;
          </button>
        )}
      </PrevNextNav>
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

const PrevNextNav = styled.div`
  padding-top: 1.5em;
  & > button {
    background: #eee;
    text-decoration: none;
    padding: 0.5em 1em;
    color: #888;
    border: 1px solid #aaa;
    font-size: 0.8em;
    margin-right: 2em;
  }
  & > button:hover {
    cursor: pointer;
  }
`
