import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { useMedia } from 'react-use';
import { Logo } from 'components/Logo/Logo';
import { Button } from 'components/Button/PrimaryButton/Button';
import { Header, Link, AuthContainer, AuthLink } from './SharedLayout.styled';
import { ContainerPage } from 'components/Container/Container';
import { MobButton } from 'components/Button/MobButton/MobButton';

export const SharedLayout = ({ children }) => {
    const isMobie = useMedia('(max-width: 767px)');

  return (
    <ContainerPage>
      <Header>
        <Logo />
    {isMobie ? (<MobButton></MobButton>) : (<ContainerPage></ContainerPage>)}
              <nav>
          <Link to="/news">News</Link>
          <Link to="/pets">Find pet</Link>
          <Link to="/services">Our friends</Link>
        </nav>

        <AuthContainer>
          <Button>Login</Button>
          <Button>Registration</Button>
        </AuthContainer>
      </Header>
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </ContainerPage>
  );
};
