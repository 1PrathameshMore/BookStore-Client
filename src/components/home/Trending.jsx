import { BsArrowRight, BsArrowLeft } from 'react-icons/bs'
import TrendingItem from './TrendingItem';
import { useState } from 'react';

const Trending = ({ books }) => {
    const [activeBook, setActiveBook] = useState(0)
    const limit = books?.length

    const handleActiveBookChange = (offset) => {
        if (activeBook === 0 && offset === -1) {
            setActiveBook(limit - 1)
        }
        else if (activeBook === limit - 1 && offset === 1) {
            setActiveBook(0)
        }
        else {
            const temp = activeBook + offset
            setActiveBook(temp)
        }
    }
    return (
        <div className="w-full h-auto px-5 flex items-center justify-between mt-10 mb-10">
            <div className='hover:text-cyan-900 aspect-square px-1 border border-white/0 hover:border-cyan-900 flex items-center rounded-full'>
                <BsArrowLeft
                    className='w-10 h-10 cursor-pointer'
                    onClick={() => { handleActiveBookChange(-1) }}
                />
            </div>
            <div className='w-[327px] md:w-[650px] xl:w-[1110px] h-full shadow-xl shadow-cyan-950'>
                <TrendingItem
                    book={books[activeBook]}
                />
            </div>
            <div className='hover:text-cyan-900 aspect-square px-1 border border-white/0 hover:border-cyan-900 flex items-center rounded-full'>
                <BsArrowRight
                    className='w-10 h-10 cursor-pointer'
                    onClick={() => { handleActiveBookChange(-1) }}
                />
            </div>
        </div>
    );
}

export default Trending;