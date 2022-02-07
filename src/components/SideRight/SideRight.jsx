import { useEffect, useState } from "react";
import { HiUserAdd } from "react-icons/hi";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useUserContext } from "../../context/UserProvider";
import { getAllUser } from "../../services";
import Button from "../Button/Button";

const SideRight = () => {
  const user = useUserContext();
  const [allUser, setAllUser] = useState([]);
  useEffect(() => {
    getAllUser().then((data) => {
      setAllUser(data);
    });
  }, []);

  return (
    <Wrapper>
      <div className="top">
        <h4>
          Tài khoản: 0
          <svg
            width="20"
            height="21"
            viewBox="0 0 20 21"
            fill="none"
            alt="g-coin"
          >
            <rect y="0.5" width="20" height="20" rx="10" fill="#F3B612"></rect>
            <rect
              x="2.5"
              y="3"
              width="15"
              height="15"
              rx="7.5"
              fill="#FFCC45"
            ></rect>
            <path
              d="M13.75 8.92188C13.75 8.85156 13.75 8.77344 13.7428 8.70312V4.875H12.4384V5.85156C11.7862 5.24219 10.9312 4.875 10.0036 4.875C7.93116 4.875 6.25 6.6875 6.25 8.92188C6.25 11.1562 7.93116 12.9688 10.0036 12.9688C10.9384 12.9688 11.7935 12.6016 12.4529 11.9844V12.3594C12.4529 13.1172 12.2572 13.7109 11.8659 14.1562C11.4601 14.6094 10.9312 14.8281 10.2283 14.8281C9.1413 14.8281 8.40217 14.3359 7.97464 13.3203H6.57609C6.82246 14.2031 7.27899 14.9062 7.9529 15.4062C8.59783 15.8828 9.36594 16.125 10.2355 16.125C11.4601 16.125 12.4239 15.6406 13.0906 14.6875C13.3659 14.3047 13.5543 13.8438 13.6486 13.3281C13.6848 13.1172 13.7138 12.875 13.7283 12.6172C13.7355 12.5234 13.7355 12.4219 13.7428 11.9062V9.13281C13.75 9.0625 13.75 8.99219 13.75 8.92188ZM10.0036 11.5469C8.6558 11.5469 7.56159 10.3672 7.56159 8.91406C7.56159 7.46094 8.6558 6.28125 10.0036 6.28125C11.3514 6.28125 12.4457 7.46094 12.4457 8.91406C12.4384 10.3672 11.3442 11.5469 10.0036 11.5469Z"
              fill="white"
            ></path>
          </svg>
        </h4>
        <button>Mua Dcoin</button>
      </div>
      <div className="body">
        <h5>Danh bạ</h5>
        <div className="friend">
          {allUser &&
            allUser.map(({ photoURL, uid, displayName }) => {
              if (uid !== user?.uid) {
                const idParam = (uid + user?.uid).split("").sort().join("");
                return (
                  <Link to={`/chat/${idParam}`} key={uid}>
                    <div className="friend-item">
                      <img src={photoURL} alt={displayName} />
                      <h5>{displayName}</h5>
                    </div>
                  </Link>
                );
              }
            })}
        </div>
      </div>
    </Wrapper>
  );
};

export default SideRight;

const Wrapper = styled.div`
  position: fixed;
  padding: 80px 16px 24px 16px;
  top: 0;
  right: 0;
  max-width: 290px;
  width: 100%;
  height: 100%;
  background: #fff;
  flex-direction: column;
  display: none;

  @media (min-width: 1100px) {
    display: flex;
  }

  .top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 24px;

    h4 {
      display: flex;
      align-items: center;
      font-size: 15px;
      svg {
        margin-left: 8px;
      }
    }
    button {
      padding: 6px 12px;
      border: 1px solid #ccc;
      border-radius: 4px;
      font-size: 12px;
    }
  }
  .body {
    .friend {
      display: flex;
      flex-direction: column;
      margin-top: 40px;
      h5 {
        margin: 12px 0;
      }
      .friend-item {
        display: flex;
        align-items: center;
        cursor: pointer;
        gap: 10px;
        img {
          width: 30px;
          height: 30px;
          border-radius: 50%;
          border: 1px solid #ccc;
        }
      }
    }
  }
`;
