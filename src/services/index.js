import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "../firebase/config";

export const addPost = async (post) => {
  try {
    const docRef = await addDoc(collection(db, "posts"), post);
    post.id = docRef.id;
    return post;
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};
export const addUser = async (user) => {
  try {
    const docRef = await addDoc(collection(db, "users"), user);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

export const getUser = async () => {
  const users = [];
  const querySnapshot = await getDocs(collection(db, "users"));
  querySnapshot.forEach((doc) => {
    users.push({ ...doc.data(), idDoc: doc.id });
  });
  return users;
};

export const getPost = async () => {
  const posts = [];
  const querySnapshot = await getDocs(collection(db, "posts"));
  querySnapshot.forEach((doc) => {
    posts.push({ ...doc.data(), id: doc.id });
  });
  return posts;
};
