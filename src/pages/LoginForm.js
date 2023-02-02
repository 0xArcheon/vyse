import React, { useState } from 'react'
import LoginFormCSS from './LoginForm.module.css'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase-config'
import { useNavigate, Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LoginForm = (props) => {
    const [L_email, setL_email] = useState('');
    const [pass, setPass] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        try {
            e.preventDefault();
            setIsLoading(true);
            const user = await signInWithEmailAndPassword(auth, L_email, pass).then(() => {
                setIsLoading(false);
                navigate("/");
            });
            console.log(user);
        }
        catch (error) {
            setIsLoading(false);
            console.log(error.message);
            const notify = () => toast.error(error.message);
            notify();
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
                            <input type="L_email" name="L_email" id="L_email" autoComplete='off' required
                                value={L_email} onChange={(e) => setL_email(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className={LoginFormCSS.field}>
                        <label htmlFor="pass">Password</label>
                        <div className={LoginFormCSS.inputfield}>
                            <input type="password" name="password" id="password" autoComplete='off' required
                                value={pass} onChange={(e) => setPass(e.target.value)}
                            />
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
                {<img src={"/images/SignupImg.png"} alt="sk" />}
            </div>
            <ToastContainer
                autoClose={1500}
            />
        </div>


    )

}

export default LoginForm
