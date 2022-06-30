import axios from "axios";

const API_URL = "http://localhost:3000/api/user/";

class AuthService {
  login(user) {
    return axios.post(API_URL + "login", {
      email: user.email,
      password: user.password,
    });
  }

  logout() {
    localStorage.removeItem("user");
  }

  register(user) {
    return axios.post(API_URL + "signup", {
      username: user.username,
      isAdmin: false,
      email: user.email,
      password: user.password,
    });
  }
}

export default new AuthService();
