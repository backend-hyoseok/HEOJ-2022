import { useQuery } from '@tanstack/react-query';
import axiosInstance from '../axios';

const me = async () => {
  const { data } = await axiosInstance.get('/auth/me');

  return data;
};

export default function useMe() {
  return useQuery(['me'], () => me());
}
