import { useEffect } from "react"
import { Route, Routes } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import Layout from './components/layout/Layout'

import { fetchDataFromApi } from './utils/api'
import { categoryActions } from './store/categorySlice'
import Register from './components/register/Register'
import Login from "./components/login/Login"
import Home from "./components/home/Home"

function App() {
	const dispatch = useDispatch()
	const category = useSelector(state => state.category)

	useEffect(() => {
		const fetcher = async () => {
			const categoryData = await fetchDataFromApi('/category', {}, 'get')

			if (categoryData) {
				dispatch(categoryActions.setCategories({ categories: categoryData }))
			}
		}

		fetcher()
	}, [])

	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route index element={<Home />} />
				<Route path="auth/login" element={<Login />} />
				<Route path="auth/register" element={<Register />} />
			</Route>
		</Routes>
	)
}

export default App
