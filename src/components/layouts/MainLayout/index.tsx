interface MainLayoutProps {
  children: React.ReactNode;
}

import { Container, Footer } from '../../common';
import HeaderMain from './HeaderMain';

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <>
      <HeaderMain />
      <main className='min-h-screen py-10 bg-white dark:bg-custom-secondary overflow-hidden'>
        <Container>
          <>{children}</>
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
