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
        <div css={style.title}>H. 블록체인 네트워크</div>
        <div css={style.info}>시간 제한 : 1초</div>
        <div css={style.info}>메모리 제한 : 512MB</div>

        <div css={style.sectionTitle}>문제</div>
        <div css={style.sectionContent}>
          <p>
            블록체인은 분산 컴퓨팅 기술 기반의 데이터 위변조 방지 기술입니다.
          </p>
          <p>
            블록체인의 개념을 간소화 시켜 블록체인 네트워크에서 절반 이상의
            사용자에게 특정 정보가 기록되어 있다면 해당 정보는 유효한 것으로
            판단하고 있다고 가정합니다.
          </p>
          <p>
            블록체인 네트워크의 사용자 인원과 각 사용자가 가지고 있는 데이터가
            주어졌을 때 특정 정보가 유효한 정보인지 출력하는 프로그램을
            작성하세요.
          </p>
        </div>
        <div css={style.sectionTitle}>입력</div>
        <div css={style.sectionContent}>
          <p>
            첫째 줄에 블록체인 네트워크 사용자 인원 {'\\(N\\)'}이 주어집니다.
          </p>
          <p>다음의 내용이 {'\\(N\\)'}번 반복됩니다.</p>
          <p>
            1. 해당 사용자가 가지고 있는 데이터의 개수 {'\\(K\\)'}가 주어집니다.
          </p>
          <p>
            2. 어떤 정보인지 나타내는 정수 {'\\(I\\)'}가 {'\\(K\\)'}개
            주어집니다.
          </p>
          <p>유효한 정보인지 확인할 정보의 개수 {'\\(Q\\)'}가 주어집니다.</p>
          <p>
            다음 {'\\(Q\\)'}개의 줄에 거쳐 어떤 정보인지 나타내는 정수{' '}
            {'\\(I\\)'}가 주어집니다.
          </p>
        </div>
        <div css={style.sectionTitle}>출력</div>
        <div css={style.sectionContent}>
          <p>
            {'\\(Q\\)'}개의 줄에 거쳐 해당 정보가 유효한 정보라면 Valid를
            아니라면 Invalid를 출력합니다.
          </p>
        </div>
        <div css={style.sectionTitle}>제한</div>
        <div css={style.sectionContent}>
          <p>{'\\( 2 \\leq N \\leq 1,000 \\)'}</p>
          <p>{'\\(N\\)'}은 짝수 입니다.</p>
          <p>{'\\( 0 \\leq K \\leq 1,000 \\)'}</p>
          <p>{'\\( 1 \\leq I \\leq 100,000 \\)'}</p>
          <p>{'\\( 1 \\leq Q \\leq 100,000 \\)'}</p>
        </div>

        <div css={style.exampleContainer}>
          <div>
            <div css={style.sectionTitle}>예제 입력 1</div>
            <div css={style.sectionContent}>
              <pre css={style.exampleText}>
                {'4\n2\n1 2\n1\n1\n1\n4\n2\n1 2\n4\n1\n2\n3\n4'}
              </pre>
            </div>
          </div>
          <div>
            <div css={style.sectionTitle}>예제 출력 1</div>
            <div css={style.sectionContent}>
              <pre css={style.exampleText}>
                {'Valid\nValid\nInvalid\nInvalid'}
              </pre>
            </div>
          </div>
        </div>
        <div css={style.sectionContent}>
          <p>
            입력에 따르면 1번 데이터는 3명의 사용자, 2번 데이터는 2명의 사용자,
            3번 데이터는 0명의 사용자, 4번 데이터는 1명의 사용자가 가지고
            있습니다.
          </p>
          <p>
            네트워크의 사용자는 4명이므로 2명 이상이 데이터를 가지고 있어야
            유효한 데이터입니다. 따라서 1, 2는 Valid, 3, 4는 Invalid를
            출력해줘야합니다.
          </p>
        </div>
      </>
    </MathJax>
  );
};

export default Problem;
