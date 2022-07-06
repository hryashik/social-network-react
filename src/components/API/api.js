import axios from "axios";

export const UsersAPI = {
   instance: axios.create({
      baseURL: 'https://social-network.samuraijs.com/api/1.0',
      withCredentials: true,
      headers: {
         'API-KEY': '70c685fa-9017-4014-b32f-41d369f75c50'
      }
   }),
   getUsers(currentPage = 1, pageSize) {
      return this.instance.get(`/users?page=${currentPage}&count=${pageSize}`)
         .then(response => response.data)
   },
   followUser(userId) {
      return this.instance.post(`/follow/${userId}`, {})
   },
   unfollowUser(userId) {
      return this.instance.delete(`/follow/${userId}`)
   },
   getProfile(userId) {
      console.warn('Pls use ProfileAPI')
      return ProfileAPI.getProfile(userId)
   },
   auth() {
      console.warn('Pls use new methods of AuthAPI')
      return AuthAPI.auth()
   }
}

export const ProfileAPI = {
   instance: axios.create({
      baseURL: 'https://social-network.samuraijs.com/api/1.0/profile',
      withCredentials: true,
      headers: {
         'API-KEY': '70c685fa-9017-4014-b32f-41d369f75c50'
      }
   }),
   getProfile(userId) {
      return this.instance.get(`/${userId}`)
   },
   getStatus(userId) {
      return this.instance.get(`/status/${userId}`)
         .then(response => response.data)
   },
   putStatus(text) {
      return this.instance.put('/status', {
         status: text
      })
   },
   updatePhoto(file) {
      const formData = new FormData()
      formData.append('image', file)
      // formData сама сформирует заголовок content-type
      return this.instance.put('/photo', formData)
   }
}

export const AuthAPI = {
   instance: axios.create({
      baseURL: 'https://social-network.samuraijs.com/api/1.0/auth',
      withCredentials: true,
      headers: {
         'API-KEY': '70c685fa-9017-4014-b32f-41d369f75c50'
      }
   }),
   auth() {
      return this.instance.get(`/me`)
   },
   login(email, password, cookie) {
      return this.instance.post(`/login`, {
         email: email,
         password: password,
         rememberMe: cookie
      })
   },
   logout() {
      return this.instance.delete(`/login`)
   }
}

