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
        <div css={style.title}>D. 오버플로우</div>
        <div css={style.info}>시간 제한 : 1초</div>
        <div css={style.info}>메모리 제한 : 512MB</div>

        <div css={style.sectionTitle}>문제</div>
        <div css={style.sectionContent}>
          <p>
            메모리 공간은 다양한 영역으로 분리가 되어 있습니다. 하지만 그 중
            스택과 힙은 같은 메모리 공간을 공유합니다. 스택 메모리는 높은
            주소에서 낮은 주소로 채워나가고 힙 메모리는 낮은 주소에서 높은
            주소로 채워나갑니다. 그러다 서로의 공간을 침범하게 될 수도 있는데
            이것을 스택/힙 오버플로우라고 합니다.
          </p>
          <p>
            대부분의 운영체제는 메모리 공간을 보호해주기 때문에 서로의 영역을
            침범하지는 않고 보호하기 위해서 제한된 힙, 스택의 크기를 정해두고
            해당 공간을 벗어나면 오류가 발생합니다.
          </p>
          <p>
            스택/힙이 공유하는 메모리 공간의 크기와 스택, 힙에 할당되는 메모리
            기록이 주어졌을 때 오버플로우 발생 여부를 판단하는 프로그램을
            작성하세요.
          </p>
        </div>
        <div css={style.sectionTitle}>입력</div>
        <div css={style.sectionContent}>
          <p>첫째 줄에 메모리 공간의 크기 {'\\(N\\)'}이 주어집니다.</p>
          <p>둘째 줄에 힙 메모리에 할당되는 횟수 {'\\(H\\)'}가 주어집니다.</p>
          <p>
            셋째 줄에 힙 메모리에 할당 될때마다 차지하게 되는 공간{' '}
            {'\\( H_{i} \\)'}가 공백으로 구분되어 주어집니다.
          </p>
          <p>넷째 줄에 스택 메모리에 할당되는 횟수 {'\\(S\\)'}가 주어집니다.</p>
          <p>
            다섯째 줄에 스택 메모리에 할당 될때마다 차지하게 되는 공간{' '}
            {'\\( S_{i} \\)'}가 공백으로 구분되어 주어집니다.
          </p>
        </div>
        <div css={style.sectionTitle}>출력</div>
        <div css={style.sectionContent}>
          <p>첫째 줄에 오버플로우가 발생하면 YES 아니라면 NO를 출력합니다.</p>
        </div>
        <div css={style.sectionTitle}>제한</div>
        <div css={style.sectionContent}>
          <p>{'\\( 1 \\leq N \\leq 10^{9} \\)'}</p>
          <p>{'\\( 1 \\leq H, S \\leq 100,000 \\)'}</p>
          <p>{'\\( 1 \\leq H_{i}, S_{i} \\leq 10,000,000 \\)'}</p>
        </div>

        <div css={style.exampleContainer}>
          <div>
            <div css={style.sectionTitle}>예제 입력 1</div>
            <div css={style.sectionContent}>
              <pre css={style.exampleText}>{'10\n3\n1 2 3\n3\n1 1 2'}</pre>
            </div>
          </div>
          <div>
            <div css={style.sectionTitle}>예제 출력 1</div>
            <div css={style.sectionContent}>
              <pre css={style.exampleText}>{'NO'}</pre>
            </div>
          </div>
        </div>
        <div css={style.sectionContent}>
          <p>
            전체 메모리 공간은 10이고 힙 메모리는 총 6만큼, 스택 메모리는 총
            4만큼 차지하기 때문에 오버플로우가 발생하지 않습니다.
          </p>
        </div>
        <div css={style.exampleContainer}>
          <div>
            <div css={style.sectionTitle}>예제 입력 2</div>
            <div css={style.sectionContent}>
              <pre css={style.exampleText}>{'10\n3\n1 2 3\n3\n1 2 3'}</pre>
            </div>
          </div>
          <div>
            <div css={style.sectionTitle}>예제 출력 2</div>
            <div css={style.sectionContent}>
              <pre css={style.exampleText}>{'YES'}</pre>
            </div>
          </div>
        </div>
        <div css={style.sectionContent}>
          <p>
            전체 메모리 공간은 10이고 힙 메모리는 총 6만큼, 스택 메모리는 총
            6만큼 차지하기 때문에 오버플로우가 발생합니다.
          </p>
        </div>
      </>
    </MathJax>
  );
};

export default Problem;
