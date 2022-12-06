import { useQuery } from '@tanstack/react-query';
import axiosInstance from '../axios';

interface SubmissionStatus {
  _id: string;
  status: string;
}

const getOneSubmissionStatus = async (id: string) => {
  const { data } = await axiosInstance.get(`/submissions/${id}/status`);
  return data;
};

export default function useOneSubmissionStatus(id: string, status: string) {
  return useQuery<SubmissionStatus>(
    ['submissions', id, 'status'],
    () => getOneSubmissionStatus(id),
    {
      enabled: status === 'QUEUED',
      refetchInterval: (data) => {
        return data?.status === 'QUEUED' ? 1000 : false;
      },
    },
  );
}
