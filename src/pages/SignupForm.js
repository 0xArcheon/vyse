import React, { useState } from 'react';
import SignupFormCSS from './SignupForm.module.css'


const SignupForm = (props) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [date, setDate] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

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
                            <input type="text" name="name" id="name" autoComplete='off'
                                value={name} onChange={(e) => setName(e.target.value)}
                                placeholder="Shawn Michaels"
                            />
                        </div>
                    </div>

                    <div className={SignupFormCSS.field}>
                        <label htmlFor="email">Email</label>
                        <div className={SignupFormCSS.inputfield}>
                            <input type="email" name="email" id="email" autoComplete='off'
                                value={email} onChange={(e) => setEmail(e.target.value)}
                                placeholder="abc123@gmail.com"
                            />
                        </div>
                    </div>

                    <div className={SignupFormCSS.field}>
                        <label htmlFor="pass">Password</label>
                        <div className={SignupFormCSS.inputfield}>
                            <input type="password" name="pass" id="pass" autoComplete='off'
                                value={password} onChange={(e) => setPassword(e.target.value)}
                                placeholder="abc123"
                            />
                        </div>
                    </div>

                    <div className={SignupFormCSS.field}>
                        <label htmlFor="dob">Date of Birth</label>
                        <div className={SignupFormCSS.inputfield}>
                            <input type="date" name="date" id="date" autoComplete='off'
                                value={date} onChange={(e) => setDate(e.target.value)}
                                placeholder=""
                            />
                        </div>
                    </div>

                    <div className={SignupFormCSS.forCont}>
                        <a className={SignupFormCSS.for} href="#">Forgot password?</a>

                    </div>
                    <div className={SignupFormCSS.field}>
                        <button type="submit" className={SignupFormCSS.btn}>Signup</button>
                    </div>
                    <div className={SignupFormCSS.dont}>Already have an account?</div>

                    <div className={SignupFormCSS.logindiv}>
                        <button onClick={() => props.onFormSwitch('login')} className={SignupFormCSS.signup}>Login</button>
                    </div>
                </form>
            </div>

            <div className={SignupFormCSS.colRight}>
                {/* <img src={shopkeeper} alt="sk" width="50vw" height="100vh" /> */}
            </div>

        </div>


    )

}

export default SignupForm
