import Cookies from 'js-cookie'

const TOKEN = 'ACCESS_TOKEN'
const INFO = 'USER_INFO'

export const setToken = tokenId => {
	Cookies.set(TOKEN, tokenId)
}

export const getToken = () => {
	return Cookies.get(TOKEN)
}

export const isLoggedIn = () => {
	return !!getToken()
}

export const setUserInfo = userInfo => {
	Cookies.set(INFO, userInfo)
}

export const getUserInfo = () => {
	return Cookies.get(INFO) && JSON.parse(Cookies.get(INFO))
}

export const logout = () => {
	Cookies.remove(TOKEN)
	Cookies.remove(INFO)
}