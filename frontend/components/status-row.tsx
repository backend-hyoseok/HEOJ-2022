import { css } from '@emotion/react';
import useOneSubmissionStatus from '../hooks/useOneSubmissionStatus';

interface StatusRowProps {
  _id: string;
  status: string;
  problem: string;
  createdAt: string;
  language: string;
}

const style = {
  container: css`
    display: flex;
    padding: 12px 0;

    font-size: 14px;

    align-items: center;

    & > div {
      flex: 1 0 0;
      text-align: center;
    }
  `,
};

const statusString = (status: string) => {
  if (status === 'AC') return '맞았습니다!';
  if (status === 'WA') return '틀렸습니다!';
  if (status === 'QUEUED') return '채점 대기 중';
  if (status === 'MLE') return '메모리 초과';
  if (status === 'TLE') return '시간 초과';
  if (status === 'RTE') return '런타임 에러';
  if (status === 'CE') return '컴파일 에러';
  if (status === 'OLE') return '출력 초과';
  if (status === 'BSC') return '비허가 시스템 호출 사용';

  return '알 수 없는 상태';
};

const statusStyle = (status: string) => {
  if (status === 'AC') {
    return css`
      color: #43a047;
    `;
  }

  if (status === 'WA') {
    return css`
      color: red;
    `;
  }

  if (status === 'QUEUED') {
    return css`
      color: #ffa000;
    `;
  }
};

const StatusRow = ({
  _id,
  status,
  problem,
  createdAt,
  language,
}: StatusRowProps) => {
  const { data } = useOneSubmissionStatus(_id, status);

  return (
    <div css={style.container}>
      <div>{problem}</div>
      <div css={statusStyle(data ? data.status : status)}>
        {statusString(data ? data.status : status)}
      </div>
      <div>{language}</div>
      <div>{new Date(createdAt).toLocaleString()}</div>
    </div>
  );
};

export default StatusRow;
