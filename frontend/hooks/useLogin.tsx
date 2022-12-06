import { useMutation, useQuery } from '@tanstack/react-query';
import axiosInstance from '../axios';

interface LoginVar {
  studentId: string;
  password: string;
}

const login = async (studentId: string, password: string) => {
  const { data } = await axiosInstance.post('/auth/login', {
    studentId: studentId,
    password: password,
  });

  return data;
};

export default function useLogin() {
  return useMutation(({ studentId, password }: LoginVar) =>
    login(studentId, password),
  );
}
