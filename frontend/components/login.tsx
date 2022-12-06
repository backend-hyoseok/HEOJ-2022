import { css } from '@emotion/react';
import Router from 'next/router';
import React, { FormEvent } from 'react';
import useLogin from '../hooks/useLogin';
import useMe from '../hooks/useMe';

const style = {
  container: css`
    display: flex;
    width: 100%;
    height: 100%;

    justify-content: center;
    align-items: center;
  `,
  form: css`
    padding: 16px;
  `,
  label: css`
    display: block;
    padding: 8px 0px;
  `,
  input: css`
    all: unset;
    padding: 8px 12px;
    border: 1px solid black;
    border-radius: 15px;

    display: block;
    width: 100%;
  `,
  button: css`
    all: unset;

    padding: 8px 12px;
    width: 100%;

    display: block;
    text-align: center;

    background-color: #283593;
    color: #fafafa;

    border-radius: 15px;

    margin-top: 8px;
  `,
  error: css`
    font-size: 14px;
    color: #ef5350;
  `,
};

const Login = () => {
  const { status } = useMe();
  const { mutate } = useLogin();

  const [showError, setShowError] = React.useState<boolean>(false);

  return (
    <>
      {status === 'error' ? (
        <div css={style.container}>
          <form
            css={style.form}
            onSubmit={(event: FormEvent) => {
              event.preventDefault();

              // @ts-ignore
              const studentId = event.target.studentId.value;
              // @ts-ignore
              const password = event.target.password.value;

              mutate(
                { studentId: studentId, password: password },
                {
                  onSuccess: () => Router.push('/problem'),
                  onError: () => setShowError(true),
                },
              );
            }}
          >
            <label css={style.label}>아이디</label>
            <input
              css={style.input}
              id="studentId"
              placeholder="아이디"
            ></input>
            <label css={style.label}>비밀번호</label>
            <input
              css={style.input}
              id="password"
              type="password"
              placeholder="비밀번호"
            ></input>
            <button css={style.button}>로그인</button>
            {showError ? (
              <div>아이디 또는 비밀번호가 일치하지 않습니다.</div>
            ) : (
              ''
            )}
          </form>
        </div>
      ) : (
        ''
      )}
    </>
  );
};

export default Login;
