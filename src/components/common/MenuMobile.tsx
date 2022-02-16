import Container from './Container';
import { BiChevronLeft, BiChevronRight, BiFilterAlt, BiHomeAlt } from 'react-icons/bi';
import { useRouter } from 'next/router';
import list_surah from '@utils/data/list_surah';
import getLocale from '@utils/getLocale';
import { useContext, useState } from 'react';
import Link from 'next/link';
import { ModalFilterVerse, ToggleDarkMode } from '@components/features';
import { DetailSurahContext } from '@context/DetailSurahContext';

const MenuMobile: React.FC = () => {
  const { resetValue, surahId } = useContext(DetailSurahContext);
  const { locale: localeRouter } = useRouter();
  const locale = getLocale(localeRouter);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  function scrollToTop() {
    resetValue();
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  return (
    <div className='fixed bottom-0 w-full flex sm:hidden items-center shadow-sm h-[70px] bg-white dark:bg-custom-primary z-10 border-t-[1px] border-t-gray-200 dark:border-t-gray-700'>
      <Container>
        <div className='items-center grid grid-cols-7 gap-2'>
          {surahId > 1 ? (
            <Link href={`/${surahId - 1}`} scroll={true} locale={locale}>
              <a className='flex items-center col-span-2'>
                <BiChevronLeft className='text-2xl h-7 w-7 cursor-pointer' onClick={scrollToTop} />
                <p className='truncate cursor-pointer' onClick={scrollToTop}>
                  {
                    list_surah.find((sura) => sura.number === surahId - 1)?.name.transliteration[
                      locale
                    ]
                  }
                </p>
              </a>
            </Link>
          ) : (
            <div className='flex items-center col-span-2'></div>
          )}
          <div className='flex items-center justify-center'>
            <ToggleDarkMode />
          </div>
          <Link href={`/`} scroll={true} locale={locale}>
            <a className='mx-auto'>
              <BiHomeAlt className='text-center text-2xl' />
            </a>
          </Link>
          <p className='mx-auto' onClick={() => setIsFilterOpen(true)}>
            <BiFilterAlt className='text-2xl cursor-pointer' />
          </p>
          {surahId < 114 ? (
            <Link href={`/${surahId + 1}`} scroll={true} locale={locale}>
              <a className='flex items-center col-span-2 justify-end'>
                <p className='truncate cursor-pointer' onClick={scrollToTop}>
                  {
                    list_surah.find((sura) => sura.number === surahId + 1)?.name.transliteration[
                      locale
                    ]
                  }
                </p>
                <BiChevronRight onClick={scrollToTop} className='cursor-pointer text-2xl h-7 w-7' />
              </a>
            </Link>
          ) : (
            <div className='flex items-center col-span-2 justify-end'></div>
          )}
        </div>
      </Container>
      {isFilterOpen && (
        <ModalFilterVerse isOpen={isFilterOpen} onClose={() => setIsFilterOpen(false)} />
      )}
    </div>
  );
};

export default MenuMobile;
