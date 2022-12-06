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
      <div css={style.title}>I. 문자열 복원하기</div>
      <div css={style.info}>시간 제한 : 1초</div>
      <div css={style.info}>메모리 제한 : 512MB</div>

      <div css={style.sectionTitle}>문제</div>
      <div css={style.sectionContent}>
        <p>
          암호화 방식 중 가장 기초적인 암호화 방식이 있습니다. 알파벳 문자를
          앞/뒤로 특정 횟수만큼 옮겨서 암호화 하는 것입니다. ( ABC -{'>'} DEF )
          이러한 암호화 방식은 빈도 분석에 취약합니다. 알파벳으로 이루어진
          문장에서 특정 문자가 많이 나온다는 점을 이용한 것입니다.
        </p>
        <p>
          빈도 분석을 이용해 암호화된 문자열과 알파벳의 빈도 순서가 주어졌을 때
          평문을 구하는 프로그램을 작성하세요.
        </p>
      </div>
      <div css={style.sectionTitle}>입력</div>
      <div css={style.sectionContent}>
        <p>첫째 줄에 소문자로 이루어진 문자열 S가 주어집니다.</p>
        <p>
          둘째 줄에 알파벳의 빈도 순서가 주어집니다. 앞에 있는 문자가 가장 많이
          나온다는 것을 의미합니다.
        </p>
      </div>
      <div css={style.sectionTitle}>출력</div>
      <div css={style.sectionContent}>
        <p>
          암호화 된 문자열을 복호화한 평문을 출력하세요. 만약 복호화의 방법이
          여러가지라면 사전순으로 가장 앞선 평문을 출력하세요.
        </p>
      </div>
      <div css={style.sectionTitle}>제한</div>
      <div css={style.sectionContent}>
        <p>주어지는 문자열의 길이는 1이상 10,000이하 입니다.</p>
        <p>둘째 줄에 주어지는 빈도 순서는 항상 26자입니다.</p>
      </div>

      <div css={style.exampleContainer}>
        <div>
          <div css={style.sectionTitle}>예제 입력 1</div>
          <div css={style.sectionContent}>
            <pre css={style.exampleText}>
              {'qhee\naogcwpszdfkinrhextjmvuyblq'}
            </pre>
          </div>
        </div>
        <div>
          <div css={style.sectionTitle}>예제 출력 1</div>
          <div css={style.sectionContent}>
            <pre css={style.exampleText}>goaa</pre>
          </div>
        </div>
      </div>
      <div css={style.sectionContent}>
        <p>
          입력 문자열을 보면 e가 2번으로 가장 많은 빈도를 가지고 있습니다.
          따라서 e는 a로 변환해줍니다.
        </p>
        <p>
          그 후 q와 h는 1번으로 같은 빈도를 가지고 있습니다. a 다음의 빈도는 o와
          g이므로 q와 h를 o와 g로 변환해야합니다. 변환하는 방법으로는 ogaa와
          goaa 두가지 방법이 존재합니다. 하지만 문제의 조건에서 사전순으로 가장
          앞서는 답을 출력해야하므로 goaa가 답이 됩니다.
        </p>
      </div>
      <div css={style.exampleContainer}>
        <div>
          <div css={style.sectionTitle}>예제 입력 2</div>
          <div css={style.sectionContent}>
            <pre css={style.exampleText}>
              {'aaee\naogcwpszdfkinrhextjmvuyblq'}
            </pre>
          </div>
        </div>
        <div>
          <div css={style.sectionTitle}>예제 출력 2</div>
          <div css={style.sectionContent}>
            <pre css={style.exampleText}>{'aaoo'}</pre>
          </div>
        </div>
      </div>
    </>
  );
};

export default Problem;
