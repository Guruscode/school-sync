export interface School {
  id: string;
  name: string;
  logo?: string;
  theme?: string;
  createdAt: string;
  updatedAt: string;
}

export interface User {
  id: string;
  email: string;
  role: "ADMIN" | "TEACHER" | "PARENT" | "STUDENT";
  schoolId: string;
  createdAt: string;
  updatedAt: string;
}

export interface Student {
  id: string;
  firstName: string;
  lastName: string;
  schoolId: string;
  createdAt: string;
  updatedAt: string;
}