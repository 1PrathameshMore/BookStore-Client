import React from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { useNavigate, useLocation } from 'react-router-dom'

import { userActions } from '../../store/userSlice'
import { BiUserCircle, BiHomeAlt2 } from 'react-icons/bi'
import { BsCart3 } from 'react-icons/bs'

const Header = () => {
    const location = useLocation()
    const dispatch = useDispatch()
    const user = useSelector(state => state.user)
    const navigate = useNavigate()

    const handleLogout = () => {
        dispatch(userActions.logout())
    }

    return (
        <div className='w-full h-[100px] border-b-[2px] border-gray-500 flex justify-center'>
            <div className='w-[327px] md:w-[689px] xl:w-[1110px] h-full flex justify-between items-center'>
                <p
                    className='text-[24px]/[36px] text-cyan-800 cursor-pointer hover:text-cyan-600'
                    onClick={() => navigate('/')}
                >
                    <BiHomeAlt2

                    />
                </p>
                {(location.pathname === '/auth/login' || location.pathname === '/auth/register')
                    ? <>

                    </>
                    : <div className='flex gap-6 h-auto items-center'>
                        <BsCart3
                            width={24}
                            height={24}
                            className='cursor-pointer h-6 w-6'
                        />
                        {user.id
                            ? <BiUserCircle
                                width={24}
                                height={24}
                                className='cursor-pointer h-6 w-6'
                                onClick={handleLogout}
                            />
                            : <button
                                className='text-gray-950 px-4 py-2 border rounded-md border-gray-950 bg-white hover:border-white hover:text-white hover:bg-gray-950'
                                onClick={() => navigate('/auth/login')}
                            >
                                Log in
                            </button>
                        }
                    </div>
                }
            </div>
        </div>
    )
}

export default Header