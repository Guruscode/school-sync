import api from "../axios";

interface LoginCredentials {
  email: string;
  password: string;
}

interface RegisterCredentials {
  email: string;
  password: string;
  role: string;
  schoolId: string;
}

export const login = async (credentials: LoginCredentials) => {
  const response = await api.post("/auth/login", credentials);
  return response.data;
};

export const register = async (credentials: RegisterCredentials) => {
  const response = await api.post("/auth/register", credentials);
  return response.data;
};