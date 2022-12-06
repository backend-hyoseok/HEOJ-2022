import { useQuery } from '@tanstack/react-query';
import axiosInstance from '../axios';

type Stats = Record<string, string>;

const getSubmissions = async () => {
  const { data } = await axiosInstance.get(`/submissions/statistics`);

  return data;
};

export default function useStatistics() {
  return useQuery<Stats>(['submissions', 'statistics'], () => getSubmissions());
}
