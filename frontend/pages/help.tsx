import { css } from '@emotion/react';
import { NextPage } from 'next';
import Head from 'next/head';
import Header from '../components/header';

const style = {
  container: css`
    width: 60%;
    margin: 32px auto;

    & > div {
      padding: 12px 0;
    }
  `,
  label: css`
    font-size: 18px;
    font-weight: bold;

    color: #212121;
  `,
};

const HelpPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>도움말</title>
      </Head>
      <Header></Header>
      <div css={style.container}>
        <div css={style.label}>참고</div>
        <div>
          모든 문제는 Python, C++ 코드로 해결할 수 있음이 보장됩니다. Java는
          테스트하지 않았습니다.
        </div>
        <div>
          대회 종료 이후에도 문제 제출이 가능합니다. 하지만 순위 계산에는
          포함되지 않습니다.
        </div>
        <div>문제 하단에 문제를 제출할 페이지로 이동하는 버튼이 있습니다.</div>
        <div>
          문제 목록에서는 본인의 제출을 확인할 수 있는 페이지로 이동하는 버튼이
          있습니다.
        </div>
        <div>
          최대한 트래픽을 줄이기 위해서 제출한 코드를 다시 확인할 수 없습니다.
        </div>
        <div>
          운영진에게 문의 사항은 오픈 카톡을 이용해주세요 링크 :{' '}
          <a href={'https://open.kakao.com'}>
            https://open.kakao.com
          </a>
        </div>
        <div>대회 종료 이후 문제 목록 화면에서 공지 사항을 확인해주세요!</div>

        <div css={style.label}>컴파일러 버전</div>
        <div>C : gcc (Ubuntu 11.3.0-1ubuntu1~22.04) 11.3.0</div>
        <div>C++ : g++ (Ubuntu 11.3.0-1ubuntu1~22.04) 11.3.0</div>
        <div>Python : Python 3.10.6</div>
        <div>Java : openjdk 18.0.2-ea 2022-07-19</div>

        <div css={style.label}>컴파일 옵션</div>
        <div>C : /usr/bin/gcc main.c -o Main -O2 -lm -static -std=gnu99</div>
        <div>
          C++ : /usr/bin/g++ main.cpp -o Main -O2 -lm -static -std=gnu++17
        </div>
        <div>
          {`Python : python3 -c "import py_compile;
          py_compile.compile(r'main.py')"`}
        </div>
        <div>
          Java : /usr/bin/javac --release 15 -J-Xms512m -J-Xmx1024m -J-Xss512m
          -encoding UTF-8 Main.java
        </div>

        <div css={style.label}>실행</div>
        <div>C : ./Main</div>
        <div>C++ : ./Main</div>
        <div>{`Python : python3 main.py`}</div>
        <div>
          Java : /usr/bin/java -Xms512m -Xmx512m -Xss512m -XX:MaxRAM=512m
          -Dfile.encoding=UTF-8 -XX:+UseSerialGC Main
        </div>
      </div>
    </>
  );
};

export default HelpPage;
