import React, { useState } from "react";
import Banner from "../components/Banner/banner";
import Featured from "../components/Featured/featured";
import Categories from "../components/Categories/categories";
import { useEffect } from "react";
import { REMOVE_ACTIVE_USER, SET_ACTIVE_USER } from "../redux/slice/authSlice";
import { auth } from "../firebase-config";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";

const user = auth.currentUser;
function Home() {
  const [uid, setUid] = useState();
  const dispatch = useDispatch();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUid(user.uid);
        dispatch(
          SET_ACTIVE_USER({
            userID: user.uid,
            email: user.email,
          })
        );
      } else {
        setUid("empty");
        dispatch(REMOVE_ACTIVE_USER());
      }
    });
    console.log(auth.currentUser);
  });
  return (
    <div className="home">
      <Banner data={uid} />
      <Featured type="featured" />
      <Categories />
    </div>
  );
}

export default Home;
