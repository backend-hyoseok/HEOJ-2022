import { css } from '@emotion/react';

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
    <>
      <div css={style.title}>C. 알파벳과 숫자로 이루어진 문자열</div>
      <div css={style.info}>시간 제한 : 1초</div>
      <div css={style.info}>메모리 제한 : 512MB</div>

      <div css={style.sectionTitle}>문제</div>
      <div css={style.sectionContent}>
        <p>
          주어진 문자열이 알파벳 대문자, 소문자, 숫자로 이루어진 문자열인지
          판단하는 프로그램을 작성하세요.
        </p>
      </div>
      <div css={style.sectionTitle}>입력</div>
      <div css={style.sectionContent}>
        <p>첫째 줄에 문자열 S가 주어집니다.</p>
      </div>
      <div css={style.sectionTitle}>출력</div>
      <div css={style.sectionContent}>
        <p>
          첫째 줄에 입력으로 주어진 문자열이 Alphanumeric 문자열이면 YES를
          아니라면 NO를 출력합니다.
        </p>
      </div>
      <div css={style.sectionTitle}>제한</div>
      <div css={style.sectionContent}>
        <p>주어지는 문자열의 길이는 1이상 10,000이하 입니다.</p>
        <p>
          주어지는 문자열은 공백을 제외한 출력 가능한 문자로 이루어져 있습니다.
        </p>
      </div>

      <div css={style.exampleContainer}>
        <div>
          <div css={style.sectionTitle}>예제 입력 1</div>
          <div css={style.sectionContent}>
            <pre css={style.exampleText}>ABCdef1234567789</pre>
          </div>
        </div>
        <div>
          <div css={style.sectionTitle}>예제 출력 1</div>
          <div css={style.sectionContent}>
            <pre css={style.exampleText}>YES</pre>
          </div>
        </div>
      </div>
      <div css={style.exampleContainer}>
        <div>
          <div css={style.sectionTitle}>예제 입력 2</div>
          <div css={style.sectionContent}>
            <pre css={style.exampleText}>ABcd12#%</pre>
          </div>
        </div>
        <div>
          <div css={style.sectionTitle}>예제 출력 2</div>
          <div css={style.sectionContent}>
            <pre css={style.exampleText}>NO</pre>
          </div>
        </div>
      </div>
    </>
  );
};

export default Problem;
