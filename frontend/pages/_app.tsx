import { css, Global } from '@emotion/react';
import { MathJaxContext } from 'better-react-mathjax';
import type { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
    mutations: { retry: false },
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Global
        styles={css`
          * {
            font-family: 'NanumBarunGothic';
            box-sizing: border-box;
            line-height: 24px;
          }

          body {
            height: 100%;
            margin: 0;
          }

          a {
            all: unset;
          }

          pre {
            font-family: 'NanumGothicCodingBold';
            font-size: 18px;
          }

          #__next {
            height: 100%;
            display: flex;
            flex-direction: column;
          }

          html {
            height: 100%;
          }
        `}
      />
      <QueryClientProvider client={queryClient}>
        <MathJaxContext>
          <Component {...pageProps} />
        </MathJaxContext>
      </QueryClientProvider>
    </>
  );
}

export default MyApp;
