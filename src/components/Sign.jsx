import React, { useState } from 'react';
import logo from "../Assets/images/N-logo.png";
import Footer from "./Footer";
import { faSignInAlt, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Sign() {
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleSignIn = () => {
        if (email.trim() === '' || password.trim() === '') {
            setError('Email and password cannot be empty');
        } else if (email === 'Example@gmail.com' && password === 'pass321') {
            // Open the / page if credentials are correct
            window.location.href = "/";
        } else {
            setError('Incorrect email or password');
        }
        // Clear error after 2 seconds
        setTimeout(() => {
            setError('');
        }, 2000);
    };

    const handleChange = (e) => {
        // Clear error when user starts typing again
        setError('');
        if (e.target.type === 'email') {
            setEmail(e.target.value);
        } else {
            setPassword(e.target.value);
        }
    };

    return (
        <div className="sign-in-main min-h-[100vh]">
            <div className="md:w-[200px] w-[150px] mx-12 lg:mx-32 py-4">
                <a href="/">
                    {" "}
                    <img src={logo} alt="Logo" />
                </a>
            </div>

            <div className="min-h-[100vh] mx-4 flex justify-center items-center">
                <form className="bg-[black] sign-in-form rounded-md py-12 px-8 lg:w-[350px]">
                    <div className="flex items-center justify-between pr-3 text-xl mb-8">
                        <h1 className="text-[white] text-3xl font-bold">Sign In</h1>
                        <FontAwesomeIcon className="icon text-white" icon={faSignInAlt} />
                    </div>

                    <input
                        type="email"
                        placeholder="Enter Your Email"
                        className="sign-input outline-none border border-gray-400 my-2 py-2 px-4 w-[100%] rounded-md"
                        value={email}
                        onChange={handleChange}
                    />
                    <br />

                    <div className="relative">
                        <input
                            type={showPassword ? 'text' : 'password'}
                            placeholder="Enter Your Password"
                            className="sign-input outline-none border border-gray-400 my-2 py-2 px-4 w-[100%] rounded-md pr-10"
                            value={password}
                            onChange={handleChange}
                        />
                        <FontAwesomeIcon
                            className="icon text-gray-400 absolute top-1/2 transform -translate-y-1/2 right-3 cursor-pointer"
                            icon={showPassword ? faEyeSlash : faEye}
                            onClick={togglePasswordVisibility}
                        />
                    </div>

                    {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

                    <button
                        type="button"
                        className="bg-[red] text-white w-[100%] mt-8 py-2 rounded-md font-semibold"
                        onClick={handleSignIn}
                    >
                        Sign In
                    </button>
                </form>
            </div>

            <Footer />
        </div>
    );
}

export default Sign;
