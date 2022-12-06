import { useMutation } from '@tanstack/react-query';
import axiosInstance from '../axios';

interface SubmissionVar {
  problem: string;
  language: string;
  code: string;
}

const createSubmission = async (submissionVar: SubmissionVar) => {
  const { data } = await axiosInstance.post('/submissions', submissionVar);

  return data;
};

export default function useSubmission() {
  return useMutation((submissionVar: SubmissionVar) =>
    createSubmission(submissionVar),
  );
}
