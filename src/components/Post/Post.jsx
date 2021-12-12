import { GiEarthAsiaOceania } from 'react-icons/gi'
import { HiOutlineDotsHorizontal } from 'react-icons/hi'
import likeIcon from '../../images/like-circle.svg'
import { BiLike, BiComment, BiShare } from 'react-icons/bi'
import { MdTagFaces } from 'react-icons/md'
import { Action, Actions, Caption, Comment, Image, LikeAndCmt, ReactList, Top, Wrapper } from './styled'
import { likeReact, hahaReact, angryReact, wowReact, sadReact, loveReact } from '../../images'
import { useContext } from 'react'
import { userContext } from '../../context/UserProvider'

const Post = () => {

  const { user } = useContext(userContext)
  return (
    <Wrapper>
      <Top>
        <img src="https://cdn-thumb-image-5.gapo.vn/750x0/smart/64a10504-eda0-430f-9eec-9063c4b05a18.jpeg" alt="" />
        <div className="nameAndTime">
          <h5>Kieu Dai Dac</h5>
          <p>10 phút trước <GiEarthAsiaOceania /></p>
        </div>
        <div className='more'>
          <HiOutlineDotsHorizontal />
        </div>
      </Top>
      <Caption>Cảm ơn em đã luôn mạnh mẽ trong thời gian qua … yêu em 🖤</Caption>
      <Image src="https://cdn-thumb-image-5.gapo.vn/750x0/smart/64a10504-eda0-430f-9eec-9063c4b05a18.jpeg" />
      <LikeAndCmt>
        <div className='like'>
          <div className='icon'>
            <img src={likeIcon} alt="" />
            <img src={likeIcon} alt="" />
            <img src={likeIcon} alt="" />
          </div>
          <p>128</p>
        </div>
        <p>0 comment</p>
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
    </Wrapper>
  )
}

export default Post

