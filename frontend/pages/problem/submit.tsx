import { css } from '@emotion/react';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Header from '../../components/header';
import SubmitSubmissionForm from '../../components/submit-submission.form';
import useMe from '../../hooks/useMe';

const style = {
  container: css`
    width: 60%;
    margin: 32px auto;
  `,
};

export const getServerSideProps: GetServerSideProps<{
  isStart: boolean;
}> = async () => {
  return {
    props: {
      isStart: Date.now() >= Date.UTC(2022, 10, 19, 5),
      isEnd: Date.now() >= Date.UTC(2022, 10, 19, 7),
    },
  };
};

const SubmitPage = ({
  isStart,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const { status } = useMe();

  const router = useRouter();

  if (!isStart) {
    return (
      <>
        <Head>
          <title>대회 시작 전</title>
        </Head>
        <Header></Header>
        <div css={style.container}>
          <div
            css={css`
              & > div {
                padding: 8px 0;
              }
            `}
          >
            <div>시작 전입니다.</div>
            <div>대회 시작 이후 새로고침 해주세요.</div>
            <div>도움말 페이지 확인 부탁드립니다!</div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Head>
        <title>제출하기</title>
      </Head>
      <Header></Header>
      <div css={style.container}>
        {status === 'success' ? (
          <SubmitSubmissionForm
            selectedProblem={
              router.isReady && router.query.problem
                ? router.query.problem.toString()
                : 'A'
            }
          ></SubmitSubmissionForm>
        ) : (
          <>
            <h1>로그인이 필요합니다</h1>
            <Link href={'/'}>메인으로 돌아가기</Link>
          </>
        )}
      </div>
    </>
  );
};

export default SubmitPage;
