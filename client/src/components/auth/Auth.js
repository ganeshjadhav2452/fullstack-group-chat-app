import React, { useState } from 'react'
import './auth.css'
import { useDispatch ,useSelector} from 'react-redux'
import { authApiCallHandler } from '../../reduxStore/slices/authSlice'
const Auth = () => {
    const dispatch = useDispatch()
    const {error} = useSelector(state=>state.auth)
    const [switchAuth, setSwitchAuth] = useState(true)
    const [userDetails, setUserDetails] = useState({
        name: '',
        email: '',
        password: ''
    })

    const authSwtichHandler = () => {

        setSwitchAuth(!switchAuth)
    }

    const nameChangeHandler = (e) => {
        setUserDetails((prev) => {
            return {
                ...userDetails,
                name: e.target.value
            }
        })
    }
    const emailChangeHandler = (e) => {
        setUserDetails((prev) => {
            return {
                ...userDetails,
                email: e.target.value
            }
        })
    }
    const passwordChangeHandler = (e) => {
        setUserDetails((prev) => {
            return {
                ...userDetails,
                password: e.target.value
            }
        })
    }

    const authSubmitHandler = async (e) => {
        e.preventDefault();

        let loginOrSignup = ''
        if (switchAuth) {
            // signup user code here
            const signInUserDetails = { ...userDetails  }
            loginOrSignup = 'signup'
            try {
                await dispatch(authApiCallHandler(signInUserDetails, loginOrSignup))
                setSwitchAuth(!switchAuth)
            } catch (error) {
                console.log(error)
            }
            
        } else {
            //create new user /singin user  code here
          const  signUpUserDetails = {
            email: userDetails.email, password: userDetails.password
            }
            loginOrSignup = 'signin'
            try {
                await dispatch(authApiCallHandler(signUpUserDetails, loginOrSignup))
            } catch (error) {
                console.log(error)
            }

        }
    }



    return (
        <div className={switchAuth ? `container right-panel-active` : "container"} id="container">
            <div className="form-container sign-up-container">
                <form onSubmit={authSubmitHandler}>
                    <h1>Create Account</h1>

                    <span>or use your email for registration</span>
                    <input type="text" placeholder="Name" onChange={nameChangeHandler} />
                    <input type="email" placeholder="Email" onChange={emailChangeHandler} />
                    <input type="password" placeholder="Password" onChange={passwordChangeHandler} />
                    <button  >Sign Up</button>
                </form>
            </div>
            <div className="form-container sign-in-container">
                <form onSubmit={authSubmitHandler}>
                    <h1>Sign In</h1>

                    <span>or use your account</span>
                    <input type="email" placeholder="Email" onChange={emailChangeHandler} />
                    <input type="password" placeholder="Password" onChange={passwordChangeHandler} />
                    <button >Sign In</button>
                
                </form>
            </div>
            <div className="overlay-container">
                <div className="overlay">
                    <div className="overlay-panel overlay-left">
                        <h1>Welcome Back</h1>
                        <p>To keep connected with us please login with your personal info</p>
                        <button onClick={authSwtichHandler} className="ghost" id="signIn">Sign In</button>
                    </div>
                    <div className="overlay-panel overlay-right">
                        <h1>Hello,Friend</h1>
                        <p>Enter your personal details and start journey with us</p>
                        <button onClick={authSwtichHandler} className="ghost" id="signUp">Sign Up</button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Auth