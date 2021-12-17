import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "../firebase/config";
import { getStorage, ref, uploadBytesResumable } from "firebase/storage";

export const addPost = async (post) => {
  try {
    const docRef = await addDoc(collection(db, "posts"), post);
    post.id = docRef.id;
    return post;
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

export const getPost = async () => {
  const posts = [];
  const querySnapshot = await getDocs(collection(db, "posts"));
  querySnapshot.forEach((doc) => {
    posts.push({ ...doc.data(), id: doc.id });
  });
  return posts;
};

export const uploadImg = async (file) => {
  const storage = getStorage();
  const storageRef = ref(storage, `images/${file.name}`);
  const uploadTask = uploadBytesResumable(storageRef, file);

  // uploadTask.on(
  //   "state_changed",
  //   (snapshot) => {},
  //   (error) => {
  //     resultUpload.error = true;
  //   },
  //   async () => {
  //     const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
  //     console.log(downloadURL);
  //     resultUpload.url = downloadURL;
  //   }
  // );
  return uploadTask;
};
