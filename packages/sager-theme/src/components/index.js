// import React from 'react'
import { connect, Global, css, styled } from 'frontity'
import Switch from '@frontity/components/switch'
import Link from '@frontity/components/link'

//Components
import List from './List'
import Post from './Post'
import Page from './Page'

const Root = ({ state, actions }) => {
  const data = state.source.get(state.router.link)

  return (
    <>
      <Global
        styles={css`
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          html {
            font-family: system-ui, Verdana, Arial, sans-serif;
          }
          @media (prefers-color-scheme: dark) {
            body {
              color: #fff;
              background-color: #404040;
            }
          }
        `}
      />
      <Header isPostType={data.isPostType} isPage={data.isPage}>
        <h1>Frontity Blog</h1>
        {state.theme.isUrlVisible ? (
          <>
            Current URL: {state.router.link}{' '}
            <Button onClick={actions.theme.toggleUrl}>&#x3c; Hide URL</Button>
          </>
        ) : (
          <Button onClick={actions.theme.toggleUrl}>Show URL &#x3e;</Button>
        )}
        <nav>
          <Link link="/">Home</Link>
          <Link link="/about-us">About us</Link>
          <Link link="/page/1">More Posts</Link>
          <Link link="/destinations">Destinations</Link>
        </nav>
      </Header>
      <Main>
        <Switch>
          <List when={data.isArchive}>This is a list</List>
          <Post when={data.isPost}>This is a post</Post>
          <Page when={data.isPage}>This is a page</Page>
          <Page when={data.isDestinations}>Destinations page</Page>
        </Switch>
      </Main>
    </>
  )
}

export default connect(Root)

//Styles
const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: #202020;
  border-bottom: solid 5px
    ${(props) =>
      props.isPostType
        ? props.isPage
          ? 'lightsteelblue'
          : 'lightseagreen'
        : 'maroon'};
  height: 125px;
  width: 100vw;
  margin-bottom: ${(props) => (props.isPostType ? '2rem' : '1rem')};

  position: relative;
  z-index: 1;

  h1 {
    filter: drop-shadow(0 0 6px black);
  }
  nav {
    display: flex;
    gap: 1.5rem;

    a {
      font-size: 1.25rem;
      text-decoration: none;
      color: #fff;
      transition: 100ms ease-in-out;

      &:hover {
        text-decoration: underline;
        filter: drop-shadow(0 0 12px whitesmoke);
      }
    }
  }
`

const Main = styled.main`
  background-color: whitesmoke;
  max-width: 1000px;
  margin: 0 auto;
  padding: 2rem;
  border-radius: 20px;

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: #404040;
    margin-bottom: 1rem;
  }
  p {
    color: #303030;
    line-height: 1.25em;
    margin-bottom: 0.75em;
  }
  a {
    text-decoration: none;
    color: steelblue;
    transition: 100ms ease-in-out;

    &:hover {
      text-decoration: underline;
    }
  }
  img {
    max-width: 100%;
  }
  figcaption {
    color: #828282;
    font-size: 0.8em;
    margin-bottom: 1em;
  }
  hr {
    display: block;
    margin: 2rem 0;
    border: solid 1px #404040;
    border-radius: 5px;
  }
`
const Button = styled.button`
  background-color: lightseagreen;
  border: none;
  color: #fff;
  padding: 10px;
  border-radius: 4px;
  transition: 40ms;

  :hover {
    cursor: pointer;
    outline: solid 2px #fff;
  }
`
