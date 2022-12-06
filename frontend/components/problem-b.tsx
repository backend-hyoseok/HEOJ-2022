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
        <div css={style.title}>B. 배열의 원소 찾기 ( Easy )</div>
        <div css={style.info}>시간 제한 : 1초</div>
        <div css={style.info}>메모리 제한 : 512MB</div>

        <div css={style.sectionTitle}>문제</div>
        <div css={style.sectionContent}>
          <p>
            정수로 이루어진 배열에서 특정 원소의 위치를 찾는 프로그램을
            작성하세요.
          </p>
        </div>
        <div css={style.sectionTitle}>입력</div>
        <div css={style.sectionContent}>
          <p>첫째 줄에 정수의 개수 {'\\(N\\)'}이 주어집니다.</p>
          <p>
            둘째 줄에 {'\\(N\\)'}개의 정수가 공백으로 나눠져 주어집니다. 각각의
            정수는 모두 다릅니다.
          </p>
          <p>
            셋째 줄에 위치를 찾고자 하는 원소의 개수 {'\\(Q\\)'}가 주어집니다.
          </p>
          <p>
            넷째 줄 부터 {'\\(Q+3\\)'} 번째 줄 까지 찾고자하는 원소가 한줄에
            하나씩 주어집니다.
          </p>
        </div>
        <div css={style.sectionTitle}>출력</div>
        <div css={style.sectionContent}>
          <p>
            찾고자 하는 원소의 위치를 출력합니다. 위치는 1부터 시작해서{' '}
            {'\\(N\\)'}까지 입니다.
          </p>
        </div>
        <div css={style.sectionTitle}>제한</div>
        <div css={style.sectionContent}>
          <p>{'\\( 1 \\leq N \\leq 100,000 \\)'}</p>
          <p>{'\\( 1 \\leq Q \\leq 100 \\)'}</p>
          <p>
            배열의 원소는 부호있는 32비트 정수 자료형의 범위를 벗어나지
            않습니다.
          </p>
        </div>

        <div css={style.exampleContainer}>
          <div>
            <div css={style.sectionTitle}>예제 입력 1</div>
            <div css={style.sectionContent}>
              <pre css={style.exampleText}>
                {'10\n3 2 6 7 0 4 9 5 1 8\n5\n1\n2\n3\n4\n5'}
              </pre>
            </div>
          </div>
          <div>
            <div css={style.sectionTitle}>예제 출력 1</div>
            <div css={style.sectionContent}>
              <pre css={style.exampleText}>{'9\n2\n1\n6\n8'}</pre>
            </div>
          </div>
        </div>
      </>
    </MathJax>
  );
};

export default Problem;
