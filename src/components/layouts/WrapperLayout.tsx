import { useRouter } from 'next/router';
import MainLayout from './MainLayout/index';
import DetailSurahLayout from './DetailSurahLayout/index';

interface WrapperLayoutProps {
  children: React.ReactNode;
}

const WrapperLayout: React.FC<WrapperLayoutProps> = (props) => {
  const { asPath } = useRouter();
  if (asPath.length > 1) {
    return <DetailSurahLayout>{props.children}</DetailSurahLayout>;
  }

  return <MainLayout>{props.children}</MainLayout>;
};

export default WrapperLayout;
