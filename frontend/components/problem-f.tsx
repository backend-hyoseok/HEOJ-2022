import { css } from '@emotion/react';
import { MathJax } from 'better-react-mathjax';

const style = {
  title: css`
    font-size: 24px;
    font-weight: bold;
    color: #212121;
    text-align: center;
    padding: 8px;
  `,
  info: css`
    font-size: 14px;
    color: #616161;
    text-align: center;
    padding: 4px;
  `,
  sectionTitle: css`
    font-size: 20px;
    font-weight: bold;

    padding: 8px;

    color: #212121;
    border-bottom: 1px solid #bdbdbd;
  `,
  sectionContent: css`
    font-size: 16px;
    line-height: 22px;

    color: #616161;
    padding: 8px;
  `,
  exampleContainer: css`
    display: flex;
    gap: 32px;

    & > * {
      flex: 1 0 0;
    }
  `,
  exampleText: css`
    white-space: pre;
    word-break: normal;
    word-wrap: normal;
    padding: 8px;
    background-color: #f7f7f9;
    border: 1px solid #e1e1e8;
    overflow-x: scroll;
  `,
};

const Problem = () => {
  return (
    <MathJax>
      <>
        <div css={style.title}>F. 배열의 원소 지우기</div>
        <div css={style.info}>시간 제한 : 1초</div>
        <div css={style.info}>메모리 제한 : 512MB</div>

        <div css={style.sectionTitle}>문제</div>
        <div css={style.sectionContent}>
          <p>
            정수로 이루어진 배열이 있습니다. 해당 배열에서 L부터 R까지 지우는
            과정을 반복하려고 합니다. 결과 배열을 출력하는 프로그램을
            작성하세요.
          </p>
        </div>
        <div css={style.sectionTitle}>입력</div>
        <div css={style.sectionContent}>
          <p>첫째 줄에 정수의 개수 N이 주어집니다.</p>
          <p>둘째 줄에 N개의 정수가 공백으로 나눠져 주어집니다.</p>
          <p>셋째 줄에 원소를 지우는 횟수 Q가 주어집니다.</p>
          <p>넷째 줄 부터 Q+3번째 줄 까지 지우는 범위 L과 R이 주어집니다.</p>
        </div>
        <div css={style.sectionTitle}>출력</div>
        <div css={style.sectionContent}>
          <p>배열에서 원소를 지운 결과 배열을 출력합니다.</p>
        </div>
        <div css={style.sectionTitle}>제한</div>
        <div css={style.sectionContent}>
          <p>{'\\( 1 \\leq N \\leq 10,000 \\)'}</p>
          <p>{'\\( 1 \\leq Q \\leq 100 \\)'}</p>
          <p>
            배열의 원소는 부호있는 32비트 정수 자료형의 범위를 벗어나지
            않습니다.
          </p>
          <p>L, R의 범위가 배열의 크기를 벗어나는 경우는 없습니다.</p>
        </div>

        <div css={style.exampleContainer}>
          <div>
            <div css={style.sectionTitle}>예제 입력 1</div>
            <div css={style.sectionContent}>
              <pre css={style.exampleText}>
                {'10\n3 2 6 7 0 4 9 5 1 8\n3\n2 4\n2 3\n1 2'}
              </pre>
            </div>
          </div>
          <div>
            <div css={style.sectionTitle}>예제 출력 1</div>
            <div css={style.sectionContent}>
              <pre css={style.exampleText}>{'5 1 8'}</pre>
            </div>
          </div>
        </div>
        <div css={style.sectionContent}>
          <p>처음 배열 : 3 2 6 7 0 4 9 5 1 8</p>
          <p>(2-4)를 지운 배열 : 3 0 4 9 5 1 8</p>
          <p>(2-3)을 지운 배열 : 3 9 5 1 8</p>
          <p>(1-2)를 지운 배열 : 5 1 8</p>
        </div>
      </>
    </MathJax>
  );
};

export default Problem;
