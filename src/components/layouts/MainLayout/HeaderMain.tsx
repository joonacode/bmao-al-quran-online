import Link from 'next/link';
import { memo, useContext } from 'react';
import { AppContext } from '@context/AppContext';
import { Container, Input } from '@components/common';
import { ToggleDarkMode } from '@components/features';
import { useRouter } from 'next/router';
import getLocale from '@utils/getLocale';
import textTranslate from '@utils/data/textTranslate';

const HeaderMain: React.FC = () => {
  const { search, changeSearch } = useContext(AppContext);
  const { locale: localeRouter } = useRouter();
  const locale = getLocale(localeRouter);
  return (
    <header className='flex items-center shadow-sm h-[70px] bg-white dark:bg-custom-primary sticky top-0 z-10'>
      <Container>
        <nav className='flex items-center justify-between gap-4'>
          <Link passHref href={'/'}>
            <h1 className='cursor-pointer text-xl font-bold'>BMAO</h1>
          </Link>
          <div className='flex-1 sm:flex-none flex items-center gap-4'>
            <div className='w-full'>
              <Input
                value={search}
                onChange={(e) => changeSearch(e.target.value)}
                name='title'
                placeholder={textTranslate.textSearch[locale] + '...'}
              />
            </div>

            <div>
              <ToggleDarkMode />
            </div>
          </div>
        </nav>
      </Container>
    </header>
  );
};

export default memo(HeaderMain);
