import { Button } from '@components/common';
import { DetailSurahContext } from '@context/DetailSurahContext';
import list_surah from '@utils/data/list_surah';
import Link from 'next/link';
import { memo, useContext } from 'react';
interface PrevNextSurahProps {
  surahId: number;
  locale: 'id' | 'en';
}

const PrevNextSurah: React.FC<PrevNextSurahProps> = ({ surahId, locale }) => {
  const { resetValue } = useContext(DetailSurahContext);

  function scrollToTop() {
    resetValue();
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  return (
    <div className='sm:flex hidden items-center justify-between mt-10 mb-16'>
      {surahId > 1 && (
        <Link href={`/${surahId - 1}`} scroll={true} locale={locale}>
          <a className='mr-auto'>
            <Button onClick={scrollToTop}>
              {list_surah.find((sura) => sura.number === surahId - 1)?.name.transliteration[locale]}
            </Button>
          </a>
        </Link>
      )}
      {surahId < 114 && (
        <Link href={`/${surahId + 1}`} scroll={true} locale={locale}>
          <a className='ml-auto'>
            <Button onClick={scrollToTop}>
              {list_surah.find((sura) => sura.number === surahId + 1)?.name.transliteration[locale]}
            </Button>
          </a>
        </Link>
      )}
    </div>
  );
};

export default memo(PrevNextSurah);
