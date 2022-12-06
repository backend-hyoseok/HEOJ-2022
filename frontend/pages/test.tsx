import { css } from '@emotion/react';
import type {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Header from '../components/header';
import StatusRow from '../components/status-row';
import useMe from '../hooks/useMe';
import useSubmissions from '../hooks/useSubmissions';

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

const style = {
  container: css`
    width: 60%;
    margin: 32px auto;
  `,
  label: css`
    font-size: 18px;
    font-weight: bold;

    color: #212121;
  `,
  table: css`
    margin: 12px 0;
    & > :not(:last-child) {
      border-bottom: 1px solid #e0e0e0;
    }
  `,
};

const StatusPage = ({
  isStart,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const { status } = useMe();

  const router = useRouter();

  const { page } = router.query;
  const _page = page ? (Array.isArray(page) ? 1 : +page) : 1;

  const { data } = useSubmissions(_page, router.isReady);

  return (
    <>
      <Header></Header>
      <div css={style.container}>
        {status === 'success' && data !== undefined ? (
          isStart ? (
            <>
              <div css={style.label}>내 제출 목록</div>
              <div css={style.table}>
                <div
                  css={css`
                    display: flex;
                    padding: 12px 0;
                    font-weight: bold;
                    align-items: center;
                    & > div {
                      flex: 1 0 0;
                      text-align: center;
                    }
                  `}
                >
                  <div>문제 번호</div>
                  <div>결과</div>
                  <div>언어</div>
                  <div>제출 시각</div>
                </div>
                {data.map((d) => (
                  <StatusRow key={d._id} {...d}></StatusRow>
                ))}
              </div>
              <div
                css={css`
                  display: flex;
                  justify-content: space-between;
                  padding-bottom: 64px;
                  margin: 0 32px;
                `}
              >
                {_page > 1 ? (
                  <Link href={`/problem/status?page=${_page - 1}`}>
                    이전 페이지
                  </Link>
                ) : (
                  <div></div>
                )}
                {
                  <Link href={`/problem/status?page=${_page + 1}`}>
                    다음 페이지
                  </Link>
                }
              </div>
            </>
          ) : (
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
          )
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

export default StatusPage;
