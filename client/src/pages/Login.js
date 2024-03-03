import React from 'react';
import "./Login.css";
import { useState } from 'react';
import { AiOutlineClose } from "react-icons/ai";
const Login = () => {
    const [flag, setflag] = useState(1);
    return (
        <div className="container">
            <div className="card">
                <div className="frame">

                    <div className="headerr">
                        <div className="cbtn" style={{ width: '24px', height: '24px', top: "12px", right: '24px', borderRadius: '24px', position: 'absolute' }}>
                            <div className="close-button" style={{ color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%' }} >
                                <AiOutlineClose />
                            </div>
                        </div>
                        <div className="headin ">
                            <div className="acc">Create your account</div>
                            <div className="brand">Empowering individuals and brands</div>
                        </div>
                        <div className="infl d-flex mt-3 flex-row  justify-content-between">
                            <div className="bo1 d-flex">
                                <div className="bo border rounded-pill p-2" onClick={() => {
                                    setflag(1);
                                }}>I am an influencer</div>
                                <div className="bo border rounded-pill p-2 mx-2" onClick={() => {
                                    setflag(2);
                                }}>Brands</div>
                            </div>
                            <div className="box3 p-2">{flag}/2</div>
                        </div>
                    </div>

                    <div className="infoformm mt-3">
                        <form>
                            <div className="mb-2">
                                <input type="email" placeholder="Enter email or phone" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>
                            <div className="mb-2">
                                <input type="password" placeholder='Full name' className="form-control" id="exampleInputPassword1" />
                            </div>
                            <div className="mb-4">
                                <input type="password" placeholder='Create password' className="form-control" id="exampleInputPassword1" />
                            </div>

                            <button type="submit" className="btn btn-primary w-100">Continue</button>
                        </form>
                        <div className="row">
                            <div className="terms col text-center mt-1">
                                I agree to <a href="/">terms</a> of use &  <a href="/">Privacy policy</a>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col text-decor login text-center mt-4 mb-4">
                            Have an account?<a href="/"> Login</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
