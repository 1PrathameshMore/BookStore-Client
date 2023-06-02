import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Register = () => {

    const navigate = useNavigate()

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleNameChange = (event) => {
        setName(event.target.value)
    }

    const handleEmailChange = (event) => {
        setEmail(event.target.value)
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value)
    }


    return (
        <div className='w-full h-screen flex items-center justify-center'>
            <div className='w-[327px] sm:w-[540px] px-3 py-6 sm:px-5 sm:py-10 rounded-md shadow-md flex flex-col items-center gap-4'>
                <h4 className='inline-block text-[28px]/[28px] text-gray-800 mx-auto'>Welcome To Mibraya</h4>
                <div className='w-full'>
                    <input
                        className='w-full rounded-md border-[2px] outline-none pl-3 py-4 text-[18px]/[24px] text-cyan-600 focus:border-cyan-800 placeholder:text-gray-600 peer'
                        placeholder='Name'
                        value={name}
                        onChange={handleNameChange}
                        type='text'
                        autoComplete='off'
                        required={true}
                    />
                </div>
                <div className='w-full'>
                    <input
                        className='w-full rounded-md border-[2px] outline-none pl-3 py-4 text-[18px]/[24px] text-cyan-600 focus:border-cyan-800 placeholder:text-gray-600 peer'
                        placeholder='Email'
                        value={email}
                        onChange={handleEmailChange}
                        type='email'
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
                <button className='w-full flex justify-center py-5 bg-cyan-800 border text-white hover:text-cyan-800 hover:bg-white hover:border-cyan-800 rounded-md font-bold text-[18px]'>
                    Register
                </button>
                <div className='h-[30px] flex items-center justify-center'>
                    <p className='text-[14px] text-gray-500'>
                        Already Have an Account?<span
                            className='font-bold text-gray-700 hover:text-gray-900 cursor-pointer ml-2'
                            onClick={() => navigate('/auth/login')}
                        >Log In Now</span>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Register