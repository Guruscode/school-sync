import api from "../axios";

export const getStudents = async (schoolId: string) => {
  const response = await api.get(`/schools/${schoolId}/students`);
  return response.data;
};

export const createStudent = async (schoolId: string, student: { firstName: string; lastName: string }) => {
  const response = await api.post(`/schools/${schoolId}/students`, student);
  return response.data;
};