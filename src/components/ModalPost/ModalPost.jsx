import { useContext, useRef, useState } from "react"
import { userContext } from '../../context/UserProvider'
import { GiEarthAsiaOceania } from 'react-icons/gi'
import { IoMdClose } from 'react-icons/io'
import { MdTagFaces } from 'react-icons/md'
import Button from '../Button/Button'
import Picker from 'emoji-picker-react';
import picVideoImg from '../../images/picture-video.svg'
import { Actions, Caption, Emoji, Modal, Overlay, PreviewImg, Top, UploadImg, Wrapper } from "./style"
import { useDispatch } from "react-redux"
import { addPost } from "../../features/posts/postsSlice"

const ModalPost = ({ handleCloseModal, setShowModal }) => {
  const { user } = useContext(userContext)
  const [caption, setCaption] = useState('')
  const [showPicker, setShowPicker] = useState(false)
  const [fileImage, setFileImage] = useState(null)
  const [imgPreview, setImgPreview] = useState(null)
  const inputFileRef = useRef()
  const dispatch = useDispatch()

  const onEmojiClick = (_, emojiObject) => {
    setCaption(caption + emojiObject.emoji)
  };

  console.log(user)

  const handleOnChange = (e) => {
    const file = e.target.files[0]
    setFileImage(file)
    setImgPreview(URL.createObjectURL(file))
  }

  const delImgPreview = () => {
    setFileImage(null)
    setImgPreview(null)
  }

  const handleSubmit = () => {
    if (caption || imgPreview) {
      const postInfo = {
        caption,
        image: imgPreview,
        user: {
          name: user.displayName,
          uid: user.uid,
          photo: user.photoURL
        }
      }
      dispatch(addPost(postInfo))
      setShowModal(false)
    }

  }


  return (
    <Wrapper>
      <Overlay onClick={() => handleCloseModal(caption, fileImage)}>

      </Overlay>
      <Modal>
        <Top>
          <img src={user?.photoURL} alt="" />
          <div>
            <h5>{user?.displayName}</h5>
            <p><GiEarthAsiaOceania /> Công khai</p>
          </div>
          <button onClick={() => handleCloseModal(caption, fileImage)}>
            <IoMdClose />
          </button>
        </Top>
        <Caption placeholder="Bạn muốn chia sẻ điều gì ?" value={caption} onChange={(e) => setCaption(e.target.value)}>
        </Caption>
        {
          imgPreview && <PreviewImg>
            <img src={imgPreview} alt="" />
            <button onClick={delImgPreview}><IoMdClose /></button>
          </PreviewImg>
        }
        <Actions>
          {
            showPicker && <Picker disableSearchBar onEmojiClick={onEmojiClick} />
          }
          <Emoji onClick={() => setShowPicker(!showPicker)}>

            <MdTagFaces />
          </Emoji>
          <UploadImg onClick={() => inputFileRef.current.click()}>
            <img src={picVideoImg} alt="" />
            <p>Thêm ảnh</p>
            <input type="file" accept="image/*" ref={inputFileRef} onChange={handleOnChange} />
          </UploadImg>
        </Actions>
        <Button dark={true} onClick={handleSubmit}>Chia sẻ</Button>
      </Modal>
    </Wrapper>
  )
}

export default ModalPost



