interface DetailSurahLayoutProps {
  children: React.ReactNode;
}

import { DetailSurahProvider } from '@context/DetailSurahContext';
import { Container, Footer, MenuMobile } from '../../common';
import HeaderDetailSurah from './HeaderDetailSurah';

const DetailSurahLayout: React.FC<DetailSurahLayoutProps> = ({ children }) => {
  return (
    <DetailSurahProvider>
      <HeaderDetailSurah />
      <main className='min-h-screen py-5 bg-white dark:bg-custom-secondary overflow-hidden'>
        <Container>
          <>{children}</>
        </Container>
      </main>
      <MenuMobile />
      <Footer />
    </DetailSurahProvider>
  );
};

export default DetailSurahLayout;
