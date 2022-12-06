import { useQuery } from '@tanstack/react-query';
import axiosInstance from '../axios';

interface SubmissionSummary {
  _id: string;
  status: string;
  problem: string;
  createdAt: string;
  language: string;
}

const getSubmissions = async (page: number) => {
  const { data } = await axiosInstance.get(`/submissions?page=${page}`);

  return data;
};

export default function useSubmissions(page: number, enabled: boolean) {
  return useQuery<SubmissionSummary[]>(
    ['submissions', page],
    () => getSubmissions(page),
    {
      enabled: enabled,
    },
  );
}
