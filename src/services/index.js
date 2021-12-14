import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "../firebase/config";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";

export const addPost = async (post) => {
  try {
    const docRef = await addDoc(collection(db, "posts"), post);
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

export const getPost = async () => {
  const posts = [];
  const querySnapshot = await getDocs(collection(db, "posts"));
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    console.log(doc.id, " => ", doc.data());
    posts.push(doc.data());
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
