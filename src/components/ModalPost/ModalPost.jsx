import { useRef, useState } from "react"
import { useUserContext } from '../../context/UserProvider'
import { GiEarthAsiaOceania } from 'react-icons/gi'
import { IoMdClose } from 'react-icons/io'
import { MdTagFaces } from 'react-icons/md'
import Button from '../Button/Button'
import Picker from 'emoji-picker-react';
import picVideoImg from '../../images/picture-video.svg'
import { Actions, Caption, Emoji, Modal, Overlay, PreviewImg, Top, UploadImg, Wrapper } from "./style"
import { addPost } from "../../services"
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from "firebase/storage"

const ModalPost = ({ handleCloseModal, setShowModal, setPosts }) => {
  const user = useUserContext()
  const [caption, setCaption] = useState('')
  const [showPicker, setShowPicker] = useState(false)
  const [fileImage, setFileImage] = useState(null)
  const [imgPreview, setImgPreview] = useState(null)
  const [loading, setLoading] = useState({ loading: false, progress: null })
  const inputFileRef = useRef()

  const onEmojiClick = (_, emojiObject) => {
    setCaption(caption + emojiObject.emoji)
  };


  const handleOnChange = (e) => {
    const file = e.target.files[0]
    setFileImage(file)
    setImgPreview(URL.createObjectURL(file))
  }

  const delImgPreview = () => {
    setFileImage(null)
    setImgPreview(null)
  }

  const handleSubmit = async () => {
    if (loading.loading) {
      return
    }
    if (caption || imgPreview) {
      const postInfo = {
        nameAuthor: user.displayName,
        imgAuthor: user.photoURL,
        uid: user.uid,
        like: {},
        caption,
        image: '',
        comments: [],
        reacts: [],
        time: Date.now()
      }
      setLoading({ loading: true, progress: null })
      if (caption && !imgPreview) {
        setLoading({ loading: false, progress: null })
        addPost(postInfo).then(data => {
          console.log(data)
          setPosts((prevState) => [data, ...prevState])
          setShowModal(false)
          setLoading({ loading: false, progress: null })
        })
      } else {
        const storage = getStorage();
        const storageRef = ref(storage, `images/${fileImage.name}`);
        const uploadTask = uploadBytesResumable(storageRef, fileImage);

        uploadTask.on('state_changed',
          (snapshot) => {
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            setLoading({ loading: true, progress: progress })
          },
          (error) => {
            setShowModal(false)
            setLoading({ loading: false, progress: null })
          },
          () => {
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
              postInfo.image = downloadURL
              addPost(postInfo).then(data => {
                setPosts((prevState) => [...prevState, data])
                setLoading({ loading: false, progress: null })
                setShowModal(false)
              })
            });
          }
        );
      }
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
        <Button dark={true} onClick={handleSubmit} disabled>{loading.loading ? 'Đang upload ' + Math.floor(loading.progress) + ' %' : 'Chia sẻ'}</Button>
      </Modal>
    </Wrapper>
  )
}

export default ModalPost



