import React, { useState } from 'react'
import loginIcon from "../assest/signin.gif"
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import imageToBase64 from '../helper/imageTobase64';
import SummaryApi from '../common';
import { toast } from 'react-toastify';

const SignUp = () => {
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)

    const navigate = useNavigate()

    const [data, setData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        profilePic: ""
    })

    const handleOnChange = (e) => {
        const { name, value } = e.target

        setData((pre) => {
            return {
                ...pre,
                [name]: value
            }
        })
    }

    const handleUploadPic = async (e) => {
        const file = e.target.files[0]

        const imagePic = await imageToBase64(file)

        console.log(imagePic);

        setData((pre) => {
            return {
                ...pre,
                profilePic: imagePic
            }

        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (data.password === data.confirmPassword) {

            const dataResponse = await fetch(SummaryApi.singUp.url, {
                method: SummaryApi.singUp.method,
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(data)
            })

            const dataApi = await dataResponse.json()

            if (dataApi.success) {
                toast.success(dataApi.message)
                navigate("/login")
            }
            if (dataApi.error) {
                toast.error(dataApi.message)
            }

        } else {
            toast.error("Please check password and confirm password")

        }
    }

    return (
        <section id='signUp'>
            <div className='mx-auto container p-4'>
                <div className='bg-white p-5 w-full max-w-sm mx-auto'>
                    <div className='w-20 h-20 mx-auto relative overflow-hidden rounded-full'>
                        <div>
                            <img src={data.profilePic || loginIcon} alt="login icon" />
                        </div>
                        <form>
                            <label>
                                <div className='text-xs bg-opacity-80 bg-slate-200 pb-4 cursor-pointer pt-2 text-center absolute bottom-0 w-full'>
                                    Upload Photo
                                </div>
                                <input type="file" className='hidden' onChange={handleUploadPic} />
                            </label>
                        </form>

                    </div>
                    <form className='pt-6 flex flex-col gap-2' onSubmit={handleSubmit}>
                        <div >
                            <label>Name:</label>
                            <div className='bg-slate-100 p-2'>
                                <input type="name"
                                    placeholder='Enter your name'
                                    name='name'
                                    value={data.name}
                                    onChange={handleOnChange}
                                    required
                                    className='w-full h-full bg-transparent outline-none' />
                            </div>
                        </div>
                        <div >
                            <label>Email:</label>
                            <div className='bg-slate-100 p-2'>
                                <input type="email"
                                    placeholder='Enter email'
                                    name='email'
                                    value={data.email}
                                    onChange={handleOnChange}
                                    required
                                    className='w-full h-full bg-transparent outline-none' />
                            </div>
                        </div>
                        <div>
                            <label>Password:</label>
                            <div className='bg-slate-100 p-2 flex'>
                                <input type={showPassword ? "text" : "password"}
                                    name='password'
                                    value={data.password}
                                    onChange={handleOnChange}
                                    placeholder='Enter password'
                                    required
                                    className='w-full h-full bg-transparent outline-none' />
                                <div className='cursor-pointer text-xl' onClick={() => setShowPassword((pre) => !pre)}>
                                    <span>
                                        {
                                            showPassword ? (<FaEye />) : (<FaEyeSlash />)
                                        }
                                    </span>

                                </div>
                            </div>
                        </div>
                        <div>
                            <label>Confirm Password:</label>
                            <div className='bg-slate-100 p-2 flex'>
                                <input type={showConfirmPassword ? "text" : "password"}
                                    name='confirmPassword'
                                    value={data.confirmPassword}
                                    onChange={handleOnChange}
                                    placeholder='Enter confirm password'
                                    required
                                    className='w-full h-full bg-transparent outline-none'
                                />

                                <div className='cursor-pointer text-xl' onClick={() => setShowConfirmPassword((pre) => !pre)}>
                                    <span>
                                        {
                                            showConfirmPassword ? (<FaEye />) : (<FaEyeSlash />)
                                        }
                                    </span>

                                </div>
                            </div>
                        </div>
                        <button className='bg-red-600 text-white px-6 py-2 w-full max-w-[150px] rounded-full hover:scale-110 transition-all mx-auto block mt-4 hover:bg-red-700'>Sign Up</button>
                    </form>
                    <p className='my-5'>Already have account ? <Link to={"/login"} className='text-red-600 hover:text-red-700 hover:underline'>Login</Link></p>
                </div>
            </div>
        </section>
    )
}

export default SignUp