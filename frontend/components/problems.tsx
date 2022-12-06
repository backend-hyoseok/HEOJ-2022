import { css } from '@emotion/react';
import Link from 'next/link';
import useStatistics from '../hooks/useStats';

const style = {
  container: css`
    width: 60%;
    margin: 32px auto;
  `,
  problemListContainer: css`
    margin: 32px 0px;

    & > ul {
      list-style-type: none;
      margin: 8px 0;
      padding: 0;

      & > li {
        padding: 8px;
      }
    }
  `,
  label: css`
    font-size: 18px;
    font-weight: bold;

    color: #212121;
  `,
  tableBorder: css`
    table {
      width: 100%;
    }

    table,
    th,
    td {
      border: 1px solid #e0e0e0;
      border-collapse: collapse;

      padding: 8px 12px;
    }
  `,
  tableHeaderNumber: css`
    width: 150px;
  `,
  table: css`
    margin: 30px 0;
  `,
  green: css`
    background-color: #c8e6c9;
  `,
  red: css`
    background-color: #ffcdd2;
  `,
};

const problemList = [
  {
    number: 'A',
    title: '웰컴 문제',
  },
  {
    number: 'B',
    title: '배열의 원소 찾기 ( Easy )',
  },
  {
    number: 'C',
    title: '알파벳과 숫자로 이루어진 문자열',
  },
  {
    number: 'D',
    title: '오버플로우',
  },
  {
    number: 'E',
    title: '발행 구독 디자인 패턴',
  },
  {
    number: 'F',
    title: '배열의 원소 지우기',
  },
  {
    number: 'G',
    title: '배열의 원소 찾기 ( Hard )',
  },
  {
    number: 'H',
    title: '블록체인 네트워크',
  },
  {
    number: 'I',
    title: '문자열 복원하기',
  },
];

const Problems = () => {
  const { data } = useStatistics();

  const getBg = (stat: string) => {
    if (stat === 'AC') return style.green;
    if (stat === 'WA') return style.red;
    return undefined;
  };

  return (
    <>
      <div css={[style.problemListContainer, style.tableBorder]}>
        <div css={style.label}>문제 목록</div>
        <table css={style.table}>
          <thead>
            <tr>
              <th css={style.tableHeaderNumber}>문제 번호</th>
              <th>문제 제목</th>
            </tr>
          </thead>
          <tbody>
            {problemList.map(({ number, title }) => {
              return (
                <Link href={`/problem/${number}`} key={number}>
                  <tr css={data ? getBg(data[number]) : undefined}>
                    <td>{number}</td>
                    <td>{title}</td>
                  </tr>
                </Link>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Problems;
