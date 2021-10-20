import React from 'react'
import './SignupPage.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import SignUpImage from './Images/SignupImage.png'

export const SignupPage = () => {
    return (
        <div className='login-bg vh-100'>
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col col-xl-10">
                        <div className="card card-props" style={{borderRadius: "1rem"}}>
                            <div className="row g-0">
                                
                                <div className="col-md-6 col-lg-5 d-none d-md-block">
                                    <img src={SignUpImage} alt="login form" className="img-fluid img-style" />
                                </div>

                                <div className="col-md-6 col-lg-7 d-flex align-items-center">
                                    <div className="card-body p-3 p-lg-4 text-black">

                                        <form>

                                            <div className="d-flex align-items-center mb-2 pb-1">
                                                
                                                <span className="h1 fw-bold mb-0 brand-name">Welcome to Traveller's Scout</span>
                                            </div>

                                            <h5 className="fw-normal mb-2 pb-3 signin-text">Create a new account</h5>

                                            <div className="form-outline mb-2">
                                                
                                                <input type="text" id="first-name" className="form-control form-control-md" placeholder='first name'/>

                                            </div>

                                            <div className="form-outline mb-2">
                                                
                                                <input type="text" id="username" className="form-control form-control-md" placeholder='enter username'/>

                                            </div>

                                            <div className="form-outline mb-2">
                                                
                                                <input type="email" id="email-id" className="form-control form-control-md" placeholder='email'/>

                                            </div>

                                            <div className="form-outline mb-2">
                                                
                                                <input type="password" id="password" className="form-control form-control-md" placeholder="password"/>

                                            </div>
                                            <div className="form-outline mb-2">
                                                
                                                <input type="password" id="verify-password" className="form-control form-control-md" placeholder="verify password"/>

                                            </div>

                                            <div className="pt-1 mb-4">
                                                <button className="btn btn-dark btn-md" type="button">Sign Up</button>
                                            </div>

                                            
                                            
                                        </form>
                                        <a className="small text-muted" href="#!">Forgot password?</a>
                                        <p className="mb-3 pb-lg-2" style={{color: '#393f81'}}>Already have an account? <a href="#!" style={{color: "#393f81"}}>Log In</a></p>
                                        <a href="#!" className="small text-muted">Terms of use</a>&nbsp;&nbsp;
                                        <a href="#!" className="small text-muted">Privacy policy</a>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignupPage
