import axios from 'axios'
import { USER_LOCAL_STORAGE_KEY } from '@/shared/constants/local-storage'

export const api = axios.create({
	baseURL: 'http://localhost:3000',
	headers: {
		Authorization: localStorage.getItem(USER_LOCAL_STORAGE_KEY),
	},
})
