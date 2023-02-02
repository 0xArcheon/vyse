import React, { useState, useEffect } from 'react';
import SignupFormCSS from './SignupForm.module.css'
import { createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth"
import { collection, addDoc } from "firebase/firestore"
import { auth, db } from '../firebase-config'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignupForm = (props) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');
    const [user, setUser] = useState({});

    const notify = () => toast("Account Created! Please use login");
    const handleSubmit = async (e) => {
        try {
            e.preventDefault();
            const user = await createUserWithEmailAndPassword(auth, email, password);
            console.log(user);
            storeData();
            notify();
        }
        catch (error) {
            console.log(error.message);
            const errorMsg = () => toast(error.message);
            errorMsg();
        }
    }

    const storeData = async () => {
        try {
            const docRef = await addDoc(collection(db, "User"), {
                fullName: name,
                email: email,
                phone: phone,
                isAdmin: false
            });
            console.log("Document written with ID: ", docRef.id);
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }

    onAuthStateChanged(auth, (currentUser) => {
        setUser = currentUser;
    });

    return (
        <div className={SignupFormCSS.Outer}>

            <div className={SignupFormCSS.colLeft}>
                <div className={SignupFormCSS.header}>
                    <img className={SignupFormCSS.headimg} src={'/images/logoDark.png'} alt="logo" />
                </div>

                <form onSubmit={handleSubmit} className={SignupFormCSS.myForm} action="">
                    <h1>Sign up</h1>
                    <div className="wel">Please enter your details.</div>

                    <div className={SignupFormCSS.field}>
                        <label htmlFor="name">Full Name</label>
                        <div className={SignupFormCSS.inputfield}>
                            <input type="text" name="name" id="name" required autoComplete='off'
                                value={name} onChange={(e) => setName(e.target.value)}

                            />
                        </div>
                    </div>

                    <div className={SignupFormCSS.field}>
                        <label htmlFor="email">Email</label>
                        <div className={SignupFormCSS.inputfield}>
                            <input type="email" name="email" id="email" required autoComplete='off'
                                value={email} onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className={SignupFormCSS.field}>
                        <label htmlFor="phone">Phone</label>
                        <div className={SignupFormCSS.inputfield}>
                            <input type="number" name="phone" id="phone" required autoComplete='off'
                                value={phone} onChange={(e) => setPhone(e.target.value)}

                            />
                        </div>
                    </div>

                    <div className={SignupFormCSS.field}>
                        <label htmlFor="pass">Password</label>
                        <div className={SignupFormCSS.inputfield}>
                            <input type="password" name="pass" id="pass" required autoComplete='off'
                                value={password} onChange={(e) => setPassword(e.target.value)}
                                placeholder="Use at least 6 characters"
                            />
                        </div>
                    </div>

                    <div className={SignupFormCSS.field}>
                        <button type="submit" className={SignupFormCSS.btn}>SignUp</button>
                    </div>
                    <div className={SignupFormCSS.bottomCont}>
                        <div className={SignupFormCSS.dont}>Already have an account?</div>

                        <div className={SignupFormCSS.logindiv}>
                            <button onClick={() => props.onFormSwitch('login')} className={SignupFormCSS.signup}>Login</button>
                        </div>
                    </div>
                </form>
            </div>

            <div className={SignupFormCSS.colRight}>
                {<img src={"/images/SignupImg.png"} alt="sk" />}
            </div>
            <ToastContainer />
        </div>


    )

}

export default SignupForm
