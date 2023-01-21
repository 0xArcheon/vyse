import React, { useState } from 'react'
import LoginFormCSS from './LoginForm.module.css'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase-config'
const LoginForm = (props) => {
    const [L_email, setL_email] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = async (e) => {
        try {
            e.preventDefault();
            const user = await signInWithEmailAndPassword(auth, L_email, pass);
            console.log(user);
        }
        catch (error) {
            console.log(error.message);
        }
    }

    return (
        <div className={LoginFormCSS.Outer}>

            <div className={LoginFormCSS.colLeft}>
                <div className={LoginFormCSS.header}>
                    <img className={LoginFormCSS.headimg} src={'/images/logoDark.png'} alt="logo" />
                </div>

                <form onSubmit={handleSubmit} className={LoginFormCSS.myForm} action="">
                    <h1>Welcome Back</h1>
                    <div className="wel">Welcome back! Please enter your details.</div>
                    <div className={LoginFormCSS.field}>
                        <label htmlFor="L_email">Email</label>
                        <div className={LoginFormCSS.inputfield}>
                            <input type="L_email" name="L_email" id="L_email" autoComplete='off'
                                value={L_email} onChange={(e) => setL_email(e.target.value)}
                                placeholder="abc123@gmail.com"
                            />
                        </div>
                    </div>

                    <div className={LoginFormCSS.field}>
                        <label htmlFor="pass">Password</label>
                        <div className={LoginFormCSS.inputfield}>
                            <input type="password" name="password" id="password" autoComplete='off'
                                value={pass} onChange={(e) => setPass(e.target.value)}
                                placeholder="abc123"
                            />
                        </div>
                        <div className={LoginFormCSS.forCont}>
                            <a className={LoginFormCSS.for} href="#">Forgot password?</a>

                        </div>
                    </div>

                    <div className={LoginFormCSS.field}>
                        <button type="submit" className={LoginFormCSS.btn}>Login</button>
                    </div>
                    <div className={LoginFormCSS.bottomCont}>
                        <div className={LoginFormCSS.dont}>Don't have an account?</div>

                        <div className={LoginFormCSS.signupdiv}>
                            <button onClick={() => props.onFormSwitch('signup')} className={LoginFormCSS.signup}>Sign Up</button>
                        </div>
                    </div>

                </form>
            </div>

            <div className={LoginFormCSS.colRight}>
                {<img src={"/images/SignupImg.png"} alt="sk" /*width="50vw" height="100vh" */ />}
            </div>

        </div>


    )

}

export default LoginForm
