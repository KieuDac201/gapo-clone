import { useEffect, useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import styled from "styled-components";

import Button from "../../components/Button/Button";
import Layout from "../../components/Layout/Layout";
import { getAllUser } from "../../services";

const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [userSearch, setUserSearch] = useState([]);
  const querySeacrch = searchParams.get("q").toLowerCase();
  const navigate = useNavigate();

  useEffect(() => {
    getAllUser().then((users) => {
      const userList = users.filter((user) =>
        user.displayName.toLowerCase().includes(querySeacrch)
      );
      setUserSearch(userList);
    });
  }, [querySeacrch]);

  const changeToPersonal = (uid) => {
    navigate(`/personal/${uid}`);
  };

  console.log(userSearch);
  return (
    <Layout>
      <Wrapper>
        {userSearch.length ? (
          userSearch.map(({ displayName, photoURL, uid }) => (
            <SearchItem key={uid}>
              <img
                src={photoURL}
                alt="picture profile"
                onClick={() => changeToPersonal(uid)}
              />
              <h4 onClick={() => changeToPersonal(uid)}>{displayName}</h4>
            </SearchItem>
          ))
        ) : (
          <h3>Khong tim thay</h3>
        )}
      </Wrapper>
    </Layout>
  );
};

export default Search;

const Wrapper = styled.div`
  max-width: 450px;

  width: 100%;
  position: relative;
  top: 90px;
  left: 50%;
  transform: translateX(-50%);
  height: 4300px;
  padding: 20px;
`;

const SearchItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  justify-content: space-between;

  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }

  span {
  }
`;
