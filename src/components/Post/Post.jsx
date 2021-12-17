import { GiEarthAsiaOceania } from 'react-icons/gi'
import { HiOutlineDotsHorizontal } from 'react-icons/hi'
import { BiLike, BiComment, BiShare } from 'react-icons/bi'
import { MdTagFaces } from 'react-icons/md'
import { Action, Actions, Caption, Comment, Image, LikeAndCmt, ReactList, Top, Wrapper } from './styled'
import { likeReact, hahaReact, angryReact, wowReact, sadReact, loveReact, objectReactIcon } from '../../images'
import { useContext } from 'react'
import { userContext } from '../../context/UserProvider'

const Post = ({ post }) => {
  const { nameAuthor, imgAuthor, image, caption, comments, time, reacts, id } = post
  const { user } = useContext(userContext)

  return (
    <Wrapper>
      <Top>
        <img src={imgAuthor} alt="" />
        <div className="nameAndTime">
          <h5>{nameAuthor}</h5>
          <p>{ }<GiEarthAsiaOceania /></p>
        </div>
        <div className='more'>
          <HiOutlineDotsHorizontal />
        </div>
      </Top >
      <Caption>{caption}</Caption>
      <Image src={image} />
      <LikeAndCmt>
        <div className='like'>
          <div className='icon'>
            {/* {
              handleReactsList(reacts).map(react => {

                return <img key={react[0]} src={objectReactIcon[react[0]]} alt={react[0]} />

              })
            } */}
          </div>
          {/* <p>{reacts.length}</p> */}
        </div>
        <p>{comments.length} bình luận</p>
      </LikeAndCmt>
      <Actions>
        <Action className='like'>
          <BiLike />
          Thích
        </Action>
        <ReactList className='reactList'>
          <img src={likeReact} alt="" />
          <img src={hahaReact} alt="" />
          <img src={loveReact} alt="" />
          <img src={wowReact} alt="" />
          <img src={angryReact} alt="" />
          <img src={sadReact} alt="" />
        </ReactList>
        <Action>
          <BiComment />
          Bình luận
        </Action>
        <Action>
          <BiShare />
          Chia sẻ
        </Action>
      </Actions>
      <Comment>
        <img src={user?.photoURL} alt="image" />
        <div>
          <input type="text" placeholder='Viết bình luận' />
          <MdTagFaces />
        </div>
      </Comment>
    </Wrapper >
  )
}

export default Post

