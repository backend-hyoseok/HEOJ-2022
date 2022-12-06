import { useMutation, useQuery } from '@tanstack/react-query';
import axiosInstance from '../axios';

const logout = async () => {
  const { data } = await axiosInstance.post('/auth/logout');

  return data;
};

export default function useLogin() {
  return useMutation(() => logout());
}
