import Link from 'next/link';
import { memo, useState } from 'react';
import { Container } from '@components/common';
import { BiFilterAlt } from 'react-icons/bi';
import { ModalFilterVerse, ToggleDarkMode } from '@components/features';
import { useRouter } from 'next/router';
import getLocale from '@utils/getLocale';
import textTranslate from '@utils/data/textTranslate';

const HeaderDetailSurah: React.FC = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const { locale: localeRouter } = useRouter();
  const locale = getLocale(localeRouter);
  return (
    <header className='flex items-center shadow-sm h-[70px] bg-white dark:bg-custom-primary sticky top-0 z-10'>
      <Container>
        <nav className='flex items-center justify-between gap-4'>
          <Link passHref href={'/'}>
            <h1 className='cursor-pointer text-xl font-bold'>BMAO</h1>
          </Link>
          <div className='flex-1 sm:flex-none sm:flex hidden items-center gap-5'>
            <div
              className='flex items-center gap-2 cursor-pointer'
              onClick={() => setIsFilterOpen(true)}
            >
              <BiFilterAlt className='text-2xl' />
              <span>{textTranslate.textFilter[locale]}</span>
            </div>
            {isFilterOpen && (
              <ModalFilterVerse isOpen={isFilterOpen} onClose={() => setIsFilterOpen(false)} />
            )}
            <ToggleDarkMode />
          </div>
        </nav>
      </Container>
    </header>
  );
};

export default memo(HeaderDetailSurah);
