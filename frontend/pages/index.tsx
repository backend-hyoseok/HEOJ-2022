import type { NextPage } from 'next';
import Router from 'next/router';
import React from 'react';
import Header from '../components/header';
import Login from '../components/login';
import useMe from '../hooks/useMe';

const Home: NextPage = () => {
  const { status } = useMe();

  React.useEffect(() => {
    if (status === 'success') Router.push('/problem');
  }, [status]);

  return (
    <>
      <Header></Header>
      <Login></Login>
    </>
  );
};

export default Home;
