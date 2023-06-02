import React, { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify'

import { userActions } from '../../store/userSlice'
import { fetchDataFromApi } from '../../utils/api'

const Login = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleEmailChange = (event) => {
        setEmail(event.target.value)
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value)
    }

    const handleSubmit = async () => {
        if (email.length == 0) {
            // toast.error('Please Enter Valid Email')
        }
        else if (password.length == 0) {
        }
        else {
            try {
                const userData = await fetchDataFromApi('/auth/login', { email, password }, 'post')
                dispatch(userActions.login({
                    id: userData._id,
                    fullName: userData.name,
                    email: userData.email
                }))
                navigate('/')

            } catch (error) {
                toast.error(error)
            }
        }
    }


    return (
        <div className='w-full h-screen flex items-center justify-center'>
            <div className='w-[327px] sm:w-[540px] px-3 py-6 sm:px-5 sm:py-10 rounded-md shadow-md flex flex-col items-center gap-4'>
                <h4 className='inline-block text-[28px]/[28px] text-gray-800 mx-auto'>Welcome back</h4>
                <div className='w-full'>
                    <input
                        className='w-full rounded-md border-[2px] outline-none pl-3 py-4 text-[18px]/[24px] text-cyan-600 focus:border-cyan-800 placeholder:text-gray-600 peer'
                        placeholder='Email'
                        value={email}
                        onChange={handleEmailChange}
                        autoComplete='off'
                        required={true}
                    />
                </div>
                <div className='w-full'>
                    <input
                        className='w-full rounded-md border-[2px] outline-none px-3 py-4 text-[18px]/[24px] text-cyan-600 focus:border-cyan-800 placeholder:text-gray-600 peer'
                        placeholder='Password'
                        value={password}
                        onChange={handlePasswordChange}
                        type='password'
                        autoComplete='off'
                        required={true}
                    />
                </div>
                <button
                    className='w-full flex justify-center py-5 bg-cyan-800 border text-white hover:text-cyan-800 hover:bg-white hover:border-cyan-800 rounded-md font-bold text-[18px]'
                    onClick={handleSubmit}
                >
                    Log In
                </button>
                <div className='h-[30px] flex items-center justify-center'>
                    <p className='text-[14px] text-gray-500'>
                        New to Mibrary?<span
                            className='font-bold text-gray-700 hover:text-gray-900 cursor-pointer ml-2'
                            onClick={() => navigate('/auth/register')}
                        >Create an Account</span>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Login