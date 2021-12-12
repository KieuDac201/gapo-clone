import { memo } from "react"
import { useSelector } from "react-redux"
import styled from "styled-components"
import Post from "../Post/Post"

const NewFeed = () => {
  const posts = useSelector((state) => state.posts)
  console.log(posts)
  return (
    <Wrapper>
      <Post />
      <Post />
    </Wrapper>
  )
}

export default memo(NewFeed)

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap:12px;
`
