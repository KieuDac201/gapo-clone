import { GiEarthAsiaOceania } from 'react-icons/gi'
import { HiOutlineDotsHorizontal } from 'react-icons/hi'
import { BiSend, BiComment, BiShare } from 'react-icons/bi'
import { AiOutlineLike, AiFillLike } from 'react-icons/ai'
import { Action, Actions, Caption, Cmt, CommentList, Image, LikeAndCmt, Top, Wrapper } from './styled'
import { likeReact } from '../../images'
import { v4 as uuidv4 } from 'uuid';
import { doc, updateDoc } from 'firebase/firestore'
import { db } from '../../firebase/config'
import Comment from '../Comment/Comment'
import { timeSince } from '../../utils'
import { useUserContext } from '../../context/UserProvider'
import Skeleton from 'react-loading-skeleton'
import "react-loading-skeleton/dist/skeleton.css";
import { FacebookShareButton } from 'react-share'
import { useState } from 'react'

const Post = ({ post }) => {
  const { nameAuthor, imgAuthor, image, caption, comments, time, like, id } = post
  const user = useUserContext()
  const [showMoreCmt, setShowMoreCmt] = useState(1)
  const [comment, setComment] = useState('')
  const [commentList, setCommentList] = useState(comments)

  const [likeList, setLikeList] = useState(like)


  const handleLike = async () => {
    const postRef = doc(db, "posts", id);
    if (likeList[id]) {
      delete likeList[id]
    } else {
      likeList[id] = 'like'
    }
    setLikeList({ ...likeList })
    await updateDoc(postRef, {
      like: likeList
    });
  }

  const handleComment = async (e) => {
    e.preventDefault()
    const postRef = doc(db, "posts", id);
    const data = [...commentList, { id: uuidv4(), time: Date.now(), uid: user.uid, name: user.displayName, img: user.photoURL, comment }]
    setCommentList(data)
    setComment('')
    await updateDoc(postRef, {
      comments: data
    });
  }

  const handleCmtMore = () => {
    return commentList.length > 1 && showMoreCmt == 1 ?
      <div onClick={() => setShowMoreCmt(commentList.length)} className='btn-show'>Xem tất cả bình luận</div>
      :
      <div onClick={() => setShowMoreCmt(1)} className='btn-show'>Ẩn bớt bình luận</div>
  }

  return (
    <Wrapper>

      <Top>
        <img src={imgAuthor} alt="" />
        <div className="nameAndTime">
          <h5>{nameAuthor || <Skeleton />}</h5>
          <p>{timeSince(time)}<GiEarthAsiaOceania /></p>
        </div>
        <div className='more'>
          <HiOutlineDotsHorizontal />
        </div>
      </Top >
      <Caption>{caption}</Caption>
      {< Image src={image} />}
      <LikeAndCmt>
        <div className='like'>
          <div className='icon'>
            <img src={likeReact} alt="" />
          </div>
          <p>{Object.keys(likeList).length}</p>
        </div>
        <p>{commentList.length} bình luận</p>
      </LikeAndCmt>
      <Actions>
        <Action className={likeList[id] ? 'like active' : 'like'} onClick={handleLike}>
          {likeList[id] ? <AiFillLike /> : <AiOutlineLike />}
          Thích
        </Action>
        <Action>
          <BiComment />
          Bình luận
        </Action>
        <FacebookShareButton url="https://thuyeudac.xyz" quote="Hello everyone" hashtag="#kieudac #frontend #react">
          <Action>
            <BiShare />
            Chia sẻ
          </Action>
        </FacebookShareButton>
      </Actions>
      {
        commentList.length !== 0 && <CommentList>

          {commentList.slice(0, showMoreCmt).map(({ img, id, name, comment, time }) => {
            return <Comment key={id} img={img} name={name} comment={comment} time={time} />
          })}
          {
            commentList.length !== 1 && handleCmtMore()
          }
        </CommentList>
      }
      <Cmt>
        <img src={user?.photoURL} alt="image" />
        <div>
          <form onSubmit={handleComment}>
            <input type="text" placeholder='Viết bình luận' value={comment} onChange={(e) => setComment(e.target.value)} />
          </form>
          {comment && <span onClick={handleComment}><BiSend /></span>}
        </div>
      </Cmt>
    </Wrapper >
  )
}

export default Post

