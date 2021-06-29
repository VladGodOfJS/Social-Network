import * as axios from "axios";
const baseUrl = "https://social-network.samuraijs.com/api/1.0/";
const instance = axios.create({
  withCredentials: true,
  headers: {
    "API-KEY": "286ace4f-96ef-49d4-9438-e02eac859f28",
  },
});

export const usersAPI = {
  getUsers(pageSize, currentPage) {
    return instance
      .get(`${baseUrl}users?count=${pageSize}&page=${currentPage}`)
      .then((response) => {
        return response.data;
      });
  },

  getProfile(userId) {
    console.warn("Please use ProfileAPI")
    return profileAPI.getProfile(userId);
  },

  followUser(userId) {
    return instance.post(`${baseUrl}follow/${userId}`, {});
  },

  unfollowUser(userId) {
    return instance.delete(`${baseUrl}follow/${userId}`);
  },
};

export const profileAPI = {

  getProfile(userId) {
    return instance.get(`${baseUrl}profile/${userId}`);
  },

  getUserStatus(userId) {
    return instance.get(`${baseUrl}profile/status/${userId}`);
  },

  updateUserStatus(status) {
    return instance.put(`https://social-network.samuraijs.com/api/1.0/profile/status`,{ status:status});
  },
};

export const authAPI = {
  setAuthMe() {
    return instance.get(`${baseUrl}auth/me`).then((response) => {
      return response.data;
    });
  },
 
  login(email,password,rememberMe){
    return instance.post(`${baseUrl}auth/login`,{email,password,rememberMe})
  },
  logout(){
    return instance.delete(`${baseUrl}auth/login`)

  }
};

