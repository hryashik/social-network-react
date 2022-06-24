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
      return this.instance.get(`/auth/me`)
   }
}

export const ProfileAPI = {
   instance: axios.create({
      baseURL: 'https://social-network.samuraijs.com/api/1.0',
      withCredentials: true,
      headers: {
         'API-KEY': '70c685fa-9017-4014-b32f-41d369f75c50'
      }
   }),
   getProfile(userId) {
      return this.instance.get(`/profile/${userId}`)
   },
   getStatus(userId) {
      return this.instance.get(`/profile/status/${userId}`)
         .then(response => response.data)
   },
   putStatus(text) {
      return this.instance.put('profile/status', {
         status: text
      })
   }
}

