import axios from "axios";

// const instance = axios.create({
//    baseURL: 'https://social-network.samuraijs.com/api/1.0',
//    withCredentials: true,
//    headers: {
//       'API-KEY': '70c685fa-9017-4014-b32f-41d369f75c50'
//    }
// })

// export function getUsers(currentPage = 1, pageSize) {
//    return instance.get(`/users?page=${currentPage}&count=${pageSize}`)
//       .then(response => response.data)
// }

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
   }
}