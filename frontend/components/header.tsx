import { css } from '@emotion/react';
import Image from 'next/image';
import Link from 'next/link';
import Router from 'next/router';
import useLogout from '../hooks/useLogout';

const style = {
  container: css`
    display: flex;
    align-items: baseline;

    margin-top: 32px;

    border-bottom: 1px solid black;

    & > div {
      flex: 1 0 0;
      text-align: center;

      padding-bottom: 12px;
    }
  `,
  logout: css`
    margin: 0 20%;
    text-align: right;

    padding-top: 16px;
  `,
};

const Header = () => {
  const { mutate } = useLogout();

  return (
    <div>
      <div css={style.logout}>
        <span
          onClick={() =>
            mutate(undefined, { onSuccess: () => Router.push('/') })
          }
        >
          로그아웃
        </span>
      </div>
      <div css={style.container}>
        <div></div>
        <div>
          <Link href={'/problem'}>문제</Link>
        </div>
        <div>
          <Image src={'/logo.png'} width={262} height={60} alt={'logo'}></Image>
        </div>
        <div>
          <Link href={'/help'}>도움말</Link>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Header;
