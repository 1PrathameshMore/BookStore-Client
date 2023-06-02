import { BsBookFill, BsFileMinus, BsFilePlus, BsFillStarFill, BsPlus } from 'react-icons/bs'
import { useSelector, useDispatch } from 'react-redux';

import { cartActions } from '../../store/cartSlice'

const TrendingItem = ({ book }) => {
    const dispatch = useDispatch()
    const cart = useSelector(state => state.cart)

    if (!book) {
        return <></>
    }

    const handleAddToCart = () => {
        dispatch(cartActions.addItem({ item: book }))
    }

    const handleRemoveFromCart = () => {
        dispatch(cartActions.removeItem({ id: book?._id }))
        console.log('Minus')
    }

    const cartCount = cart.cartItems.find((item) => item._id == book?._id)

    return (
        <div className="w-full px-6 py-7 flex md:flex-row flex-col gap-10 items-center md:gap-0 md:justify-around md:items-start">
            <img
                src={import.meta.env.VITE_BASE_URL + book?.mainImage}
                className="w-[150px] xl:w-[400px] aspect-auto"
            />
            <div className="md:w-[350px] xl:w-[600px] flex flex-col justify-start gap-12 xl:gap-20">
                <div className="w-full">
                    <h2 className="text-[36px] text-gray-900 hover:text-cyan-800 cursor-pointer">{book?.name}</h2>
                    <p className="mt-4 text-[18px] text-gray-700">{book?.description?.slice(0, 100)}...</p>
                    <p className='mt-4 text-[18px] text-gray-700 flex items-center'>
                        <BsBookFill
                            className='mr-2'
                        />{book?.totalOrders}
                    </p>
                    <p className='mt-4 text-[18px] text-gray-700 flex items-center'>
                        <BsFillStarFill
                            className='mr-2'
                        />{book?.rating?.$numberDecimal}
                        <span className='ml-10'>({book?.ratingCount} ratings)</span>
                    </p>
                    <p className='flex gap-2 text-gray-700 text-[18px] items-center mt-6'>By <span className='text-[24px] hover:text-cyan-800 cursor-pointer'>{book?.author?.name}</span></p>
                </div>
                <div className='w-full flex h-auto gap-10 justify-end items-center '>
                    <p className='font-medium text-[18px] text-gray-700'>&#8377; {book?.price.$numberDecimal}</p>
                    {
                        !cartCount
                            ? <button
                                className='bg-cyan-800 text-white text-[20px] px-3 py-2 flex items-center rounded-md hover:bg-cyan-500'
                                onClick={handleAddToCart}
                            >Add To Cart</button>
                            : <div
                                className='bg-cyan-800 text-white text-[20px] px-3 py-2 flex items-center gap-2 rounded-md '>
                                <BsFilePlus
                                    className='cursor-pointer'
                                    onClick={handleAddToCart}
                                />
                                {cartCount.quantity}
                                <BsFileMinus
                                    className='cursor-pointer'
                                    onClick={handleRemoveFromCart}
                                />
                            </div>}
                </div>
            </div>
        </div>
    );
}

export default TrendingItem;