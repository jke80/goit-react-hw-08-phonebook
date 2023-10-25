//import { Suspense } from 'react';
// import { LayoutStyled } from './LayoutStyled';
//import { Loading } from 'components/Loading/Loading';
import { Outlet } from 'react-router-dom';
import { Header } from 'components/Header/Header';

export const Layout = () => {
  return (
    <>
      <Header />
      {/* <Suspense fallback={<Loading />}> */}
      <Outlet />
      {/* </Suspense> */}
    </>
  );
};
