import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { bookActions } from '../../store/bookSlice'
import { fetchDataFromApi } from '../../utils/api'
import Trending from './Trending'

const Home = () => {

    const dispatch = useDispatch()
    const books = useSelector(state => state.book.books)

    useEffect(() => {
        const fetcher = async () => {
            const booksData = await fetchDataFromApi('/book', {}, 'get')
            console.log(booksData)
            if (booksData) {
                dispatch(bookActions.setBooks({ books: booksData }))
            }
        }

        if (books.length === 0) {
            fetcher()
        }

    }, [])

    return (<div className='w-full min-h-screen'>
        <Trending
            books={books}
        />
    </div>)

}

export default Home