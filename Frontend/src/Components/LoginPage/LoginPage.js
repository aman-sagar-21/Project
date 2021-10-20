import React from 'react'
import './LoginPage.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import loginSideImage from './Images/loginImage.png'

export const LoginPage = () => {
    return (
        <div className='login-bg vh-100'>
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col col-xl-10">
                        <div className="card card-props" style={{borderRadius: "1rem"}}>
                            <div className="row g-0">
                                <div className="col-md-6 col-lg-5 d-none d-md-block">
                                    <img src={loginSideImage} alt="login form" className="img-style img-fluid" />
                                </div>
                                <div className="col-md-6 col-lg-7 d-flex align-items-center">
                                    <div className="card-body p-3 p-lg-4 text-black">

                                        <form>

                                            <div className="d-flex align-items-center mb-2 pb-1">
                                                <i className="fas fa-car fa-2x me-3" style={{color: '#ff6219'}}></i>
                                                <span className="h1 fw-bold mb-0 brand-name">Traveller's Scout</span>
                                            </div>

                                            <div className="align-items-center mb-3 pb-1">
                                                <span className="h3 fw-bold mb-0 greet-hello">Hello,</span><br /> <span className="h1 fw-bold mb-0 greet-wlcm">Welcome!</span>
                                            </div>

                                            <h5 className="fw-normal mb-2 pb-3 signin-text">Sign into your account</h5>

                                            <div className="form-outline mb-2">
                                                
                                                <input type="email" id="email-id" className="form-control form-control-md" placeholder='Enter Email'/>

                                            </div>

                                            <div className="form-outline mb-2">
                                                
                                                <input type="password" id="password" className="form-control form-control-md" placeholder="Password"/>

                                            </div>

                                            <div className="pt-1 mb-4">
                                                <button className="btn btn-dark btn-md" type="button">Login</button>
                                            </div>

                                            <a className="small text-muted" href="#!">Forgot password?</a>
                                            <p className="mb-3 pb-lg-2" style={{color: '#393f81'}}>Don't have an account? <a href="#!" style={{color: "#393f81;"}}>Sign Up</a></p>
                                            {/* <a href="#!" className="small text-muted">Terms of use</a>&nbsp;&nbsp;
                                            <a href="#!" className="small text-muted">Privacy policy</a> */}
                                        </form>

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

export default LoginPage
