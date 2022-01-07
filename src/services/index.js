import {
  collection,
  addDoc,
  getDocs,
  where,
  query,
  orderBy,
  limit,
  startAt,
} from "firebase/firestore";
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
  const q = query(collection(db, "posts"), orderBy("time", "desc"));
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    posts.push({ ...doc.data(), id: doc.id });
  });
  return posts;
};

export const getUserWithUid = async (uid) => {
  let data = {};
  const q = query(collection(db, "users"), where("uid", "==", uid));
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    data = { ...doc.data() };
  });
  return data;
};

export const getAllUser = async () => {
  let data = [];
  const q = query(collection(db, "users"));
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    data.push(doc.data());
  });
  return data;
};

export const getPostWithUid = async (uid) => {
  let data = [];
  const q = query(collection(db, "posts"), where("uid", "==", uid));
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    data.push({ ...doc.data(), id: doc.id });
  });
  return data;
};
