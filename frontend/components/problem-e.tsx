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
        <div css={style.title}>E. 발행 구독 디자인 패턴</div>
        <div css={style.info}>시간 제한 : 1초</div>
        <div css={style.info}>메모리 제한 : 512MB</div>

        <div css={style.sectionTitle}>문제</div>
        <div css={style.sectionContent}>
          <p>
            프로그래밍을 하다보면 아무것도 모르는 상태로 구조를 짜고 완성하기는
            매우 어렵습니다. 그래서 개발자들은 다양한 프로그래밍 기법들을
            연구하게 되었고 그 결과 다양한 디자인 패턴들이 생기게 되었습니다. 그
            중 하나인 발행 구독 디자인 패턴은 구독자와 발행자가 있고 중간에
            브로커가 존재하는 형태를 가지고 있습니다.
          </p>
          <p>
            발행 구독 패턴은 발행자와 구독자가 서로를 알 필요가 없습니다.
            구독자는 특정 메시지를 구독한다는 정보를 브로커에게 보내고 발행자는
            특정 메시지를 발행한다는 정보를 브로커에게 보낸 다음 브로커가
            적절하게 메시지를 전달해줍니다.
          </p>
          <p>
            발행자, 구독자 정보, 메시지 정보가 주어졌을 때 어떤 순서로 메시지가
            수신되는지를 나타내는 프로그램을 작성하세요.
          </p>
        </div>
        <div css={style.sectionTitle}>입력</div>
        <div css={style.sectionContent}>
          <p>첫째 줄에 발행자의 개수 {'\\(N\\)'}이 주어집니다.</p>
          <p>N개의 줄에 거쳐 발행자의 이름이 주어집니다.</p>
          <p>다음 줄에 구독자의 개수 {'\\(M\\)'}이 주어집니다.</p>
          <p>M개의 줄에 거쳐 구독자의 이름이 주어집니다.</p>
          <p>다음 줄에 구독자의 구독 정보의 개수 {'\\(K\\)'}가 주어집니다.</p>
          <p>
            K개의 줄에 거쳐 구독자의 이름과 구독하는 메시지 정보가 주어집니다.
          </p>
          <p>다음 줄에 발행자의 발행 메시지 개수 {'\\(Q\\)'}가 주어집니다.</p>
          <p>
            Q개의 줄에 거쳐 발행자의 이름과 발행하는 메시지 정보가 주어집니다.
          </p>
        </div>
        <div css={style.sectionTitle}>출력</div>
        <div css={style.sectionContent}>
          <p>메시지 수신 정보를 출력합니다.</p>
          <p>
            메시지 수신 정보는 구독자, 발행자, 메시지 총 3개의 정보로 이루어져
            있습니다.
          </p>
        </div>
        <div css={style.sectionTitle}>제한</div>
        <div css={style.sectionContent}>
          <p>{'\\( 1 \\leq N, M, K, Q \\leq 100 \\)'}</p>
          <p>
            발행자, 구독자의 이름, 메시지 정보는 알파벳 소문자, 숫자로 이루어져
            있고 길이는 최대 20글자입니다.
          </p>
          <p>메시지 수신 순서는 구독 순서 그대로 수신됩니다.</p>
          <p>
            같은 구독자가 같은 메시지를 여러번 구독할 수 있습니다. 이 경우 두 번
            이벤트가 발생해야합니다.
          </p>
          <p>아무도 구독하지 않는 메시지가 발행될 수 있습니다.</p>
        </div>

        <div css={style.exampleContainer}>
          <div>
            <div css={style.sectionTitle}>예제 입력 1</div>
            <div css={style.sectionContent}>
              <pre css={style.exampleText}>
                {[
                  '3',
                  'pub1',
                  'pub2',
                  'pub3',
                  '3',
                  'sub1',
                  'sub2',
                  'sub3',
                  '5',
                  'sub2 msg1',
                  'sub1 msg1',
                  'sub2 msg2',
                  'sub3 msg3',
                  'sub1 msg3',
                  '3',
                  'pub2 msg2',
                  'pub1 msg3',
                  'pub3 msg1',
                ].join('\n')}
              </pre>
            </div>
          </div>
          <div>
            <div css={style.sectionTitle}>예제 출력 1</div>
            <div css={style.sectionContent}>
              <pre css={style.exampleText}>
                {[
                  'sub2 pub2 msg2',
                  'sub3 pub1 msg3',
                  'sub1 pub1 msg3',
                  'sub2 pub3 msg1',
                  'sub1 pub3 msg1',
                ].join('\n')}
              </pre>
            </div>
          </div>
        </div>
      </>
    </MathJax>
  );
};

export default Problem;
