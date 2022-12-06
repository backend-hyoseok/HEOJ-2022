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
      <div css={style.title}>A. 웰컴 문제</div>
      <div css={style.info}>시간 제한 : 1초</div>
      <div css={style.info}>메모리 제한 : 512MB</div>

      <div css={style.sectionTitle}>문제</div>
      <div css={style.sectionContent}>
        <p>
          이번 알고리즘 대회에 관심을 가지고 참가해주신 여러분들 모두 알고리즘
          고수가 될 수 있을 것입니다. 그런 의미로 {'"'}I{"'"}m gosu.{'"'}를
          출력하는 프로그램을 작성하세요.
        </p>
      </div>
      <div css={style.sectionTitle}>입력</div>
      <div css={style.sectionContent}>
        <p>입력이 없는 문제입니다.</p>
      </div>
      <div css={style.sectionTitle}>출력</div>
      <div css={style.sectionContent}>
        <p>
          첫째 줄에 {'"'}I{"'"}m gosu.{'"'}를 쌍따옴표를 제외하고 출력합니다.
        </p>
      </div>
      <div css={style.sectionTitle}>제한</div>
      <div css={style.sectionContent}>
        <p>제한이 없는 문제입니다.</p>
      </div>

      <div css={style.exampleContainer}>
        <div>
          <div css={style.sectionTitle}>예제 입력 1</div>
          <div css={style.sectionContent}>
            <pre css={style.exampleText}></pre>
          </div>
        </div>
        <div>
          <div css={style.sectionTitle}>예제 출력 1</div>
          <div css={style.sectionContent}>
            <pre css={style.exampleText}>I{"'"}m gosu.</pre>
          </div>
        </div>
      </div>
    </>
  );
};

export default Problem;
