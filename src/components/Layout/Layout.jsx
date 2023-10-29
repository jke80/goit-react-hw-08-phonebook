import { Suspense } from 'react';
// import { LayoutStyled } from './LayoutStyled';
import { Loading } from 'components/Loading/Loading';
import { Outlet } from 'react-router-dom';
import { Header } from 'components/Header/Header';
import { Container } from '@chakra-ui/react';

export const Layout = () => {
  return (
    <Container maxW='100%' p={15}>
      <Header />
      <Suspense fallback={<Loading />}>
        <Outlet />
      </Suspense>
    </Container>
  );
};
