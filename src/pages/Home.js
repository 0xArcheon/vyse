import React from 'react';
import Banner from '../components/Banner/banner';
import Featured from '../components/Featured/featured';
import Categories from '../components/Categories/categories';
import { useEffect } from 'react';
import { SET_ACTIVE_USER } from '../redux/slice/authSlice';
import { auth } from '../firebase-config';
import { onAuthStateChanged } from 'firebase/auth';
import { useDispatch } from 'react-redux';

const user = auth.currentUser;
function Home() {
    const dispatch = useDispatch();
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                const uid = user.uid;
                dispatch(SET_ACTIVE_USER({
                    userID: user.uid,
                    email: user.email,
                }))
            }
        })
    })
    return (
        <div className='home'>
            <Banner />
            <Featured type="featured" />
            <Categories />
        </div>
    );
}

export default Home;