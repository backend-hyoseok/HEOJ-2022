import { css } from '@emotion/react';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import Link from 'next/link';
import Header from '../../components/header';
import useMe from '../../hooks/useMe';

const style = {
  container: css`
    width: 60%;
    margin: 32px auto;
  `,
  button: css`
    background-color: #303f9f;
    padding: 12px 16px;
    border-radius: 12px;
    color: white;
    text-align: center;
    margin: 16px 0;
  `,
};

export const getServerSideProps: GetServerSideProps<{
  isStart: boolean;
  isEnd: boolean;
}> = async () => {
  return {
    props: {
      isStart: Date.now() >= Date.UTC(2022, 10, 19, 5),
      isEnd: Date.now() >= Date.UTC(2022, 10, 19, 7),
    },
  };
};

const Problems = dynamic(() => import('../../components/problems'));
const End = dynamic(() => import('../../components/end'));

const ProblemsPage = ({
  isStart,
  isEnd,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const { status } = useMe();

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
        <title>문제 목록</title>
      </Head>
      <Header></Header>
      <div css={style.container}>
        {isEnd ? <End></End> : ''}
        {status === 'success' ? (
          <>
            <Problems></Problems>
            <Link href={'/problem/status'}>
              <div css={style.button}>내 제출 목록 보러가기</div>
            </Link>
          </>
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

export default ProblemsPage;
