import { GiEarthAsiaOceania } from "react-icons/gi";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { BiSend, BiComment, BiShare } from "react-icons/bi";
import { AiOutlineLike, AiFillLike } from "react-icons/ai";
import { doc, updateDoc, setDoc } from "firebase/firestore";
import { FacebookShareButton } from "react-share";
import { useState } from "react";
import { Link } from "react-router-dom";

import {
  Action,
  Actions,
  Caption,
  Cmt,
  CommentList,
  Image,
  LikeAndCmt,
  Top,
  Wrapper,
} from "./styled";
import { likeReact } from "../../images";
import { v4 as uuidv4 } from "uuid";
import { db } from "../../firebase/config";
import Comment from "../Comment/Comment";
import { timeSince } from "../../utils";
import { useUserContext } from "../../context/UserProvider";
import ModalImg from "../ModalImg/ModalImg";

const Post = ({ post }) => {
  const {
    nameAuthor,
    imgAuthor,
    image,
    caption,
    comments,
    time,
    like,
    id,
    uid,
  } = post;
  const user = useUserContext();
  const [showMoreCmt, setShowMoreCmt] = useState(1);
  const [comment, setComment] = useState("");
  const [commentList, setCommentList] = useState(comments);
  const [likeList, setLikeList] = useState(like);
  const [isOpenModal, setIsOpenModal] = useState(false);
  console.log(likeList);

  const handleLike = async () => {
    const postRef = doc(db, "posts", id);
    if (likeList[uid]) {
      delete likeList[uid];
    } else {
      likeList[uid] = "like";
    }
    setLikeList({ ...likeList });
    await updateDoc(postRef, {
      like: likeList,
    });
  };

  const handleComment = async (e) => {
    e.preventDefault();
    const postRef = doc(db, "posts", id);
    const data = [
      ...commentList,
      {
        id: uuidv4(),
        time: Date.now(),
        uid: user.uid,
        name: user.displayName,
        img: user.photoURL,
        comment,
      },
    ];
    setCommentList(data);
    setComment("");
    await updateDoc(postRef, {
      comments: data,
    });
  };

  const handleCmtMore = () => {
    return commentList.length > 1 && showMoreCmt == 1 ? (
      <div
        onClick={() => setShowMoreCmt(commentList.length)}
        className="btn-show"
      >
        Xem t???t c??? b??nh lu???n
      </div>
    ) : (
      <div onClick={() => setShowMoreCmt(1)} className="btn-show">
        ???n b???t b??nh lu???n
      </div>
    );
  };

  return (
    <Wrapper>
      <ModalImg
        isOpenModal={isOpenModal}
        setIsOpenModal={setIsOpenModal}
        img={image}
      />
      <Top>
        <Link to={`/personal/${uid}`}>
          <img src={imgAuthor} alt="" className="logo" />
        </Link>
        <div className="nameAndTime">
          <h5>{nameAuthor}</h5>
          <p>
            {timeSince(time)}
            <GiEarthAsiaOceania />
          </p>
        </div>
        <div className="more">
          <HiOutlineDotsHorizontal />
        </div>
      </Top>
      <Caption>{caption}</Caption>
      {<Image src={image} onClick={() => setIsOpenModal(true)} />}
      <LikeAndCmt>
        <div className="like">
          <div className="icon">
            <img src={likeReact} alt="" />
          </div>
          <p>{Object.keys(likeList).length}</p>
        </div>
        <p>{commentList.length} b??nh lu???n</p>
      </LikeAndCmt>
      <Actions>
        <Action
          className={likeList[uid] ? "like active" : "like"}
          onClick={handleLike}
        >
          {likeList[uid] ? <AiFillLike /> : <AiOutlineLike />}
          Th??ch
        </Action>
        <Action>
          <BiComment />
          B??nh lu???n
        </Action>
        <FacebookShareButton
          url="https://thuyeudac.xyz"
          quote="Hello everyone"
          hashtag="#kieudac #frontend #react"
        >
          <Action>
            <BiShare />
            Chia s???
          </Action>
        </FacebookShareButton>
      </Actions>
      {commentList.length !== 0 && (
        <CommentList>
          {commentList
            .slice(0, showMoreCmt)
            .map(({ img, id, name, comment, time }) => {
              return (
                <Comment
                  key={id}
                  img={img}
                  name={name}
                  comment={comment}
                  time={time}
                />
              );
            })}
          {commentList.length !== 1 && handleCmtMore()}
        </CommentList>
      )}
      <Cmt>
        <img src={user?.photoURL} alt="image" />
        <div>
          <form onSubmit={handleComment}>
            <input
              type="text"
              placeholder="Vi???t b??nh lu???n"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
          </form>
          {comment && (
            <span onClick={handleComment}>
              <BiSend />
            </span>
          )}
        </div>
      </Cmt>
    </Wrapper>
  );
};

export default Post;
