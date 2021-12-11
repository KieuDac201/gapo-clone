import { getAuth, signOut } from "firebase/auth";
import { Link, Navigate } from "react-router-dom"
import Header from "../../components/Header/Header";

const Home = ({ user }) => {
  const auth = getAuth();

  console.log(user)

  const logOut = () => {
    signOut(auth)
      .then(() => {
        console.log('log out')

      })
      .catch((error) => {
        console.log('log out error')
      });
  };
  return (
    <div>
      <Header />
      Home
      <button onClick={logOut}>log out </button>
    </div>
  )
}

export default Home
