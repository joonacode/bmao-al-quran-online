import { IDetailSurah } from '@constants/types';
import { memo, useCallback, useState } from 'react';
import SurahItem from './SurahItem';

interface SurahListProps {
  data: IDetailSurah[];
}

const SurahList: React.FC<SurahListProps> = ({ data }) => {
  const [surahId, setSurahId] = useState<number>(0);
  const changeSurahId = useCallback((id) => {
    setSurahId(id);
  }, []);

  return (
    <>
      {data.length > 0 ? (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {data.map((surah: IDetailSurah, i) => (
            <SurahItem
              changePage={changeSurahId}
              data={surah}
              key={i}
              isLoading={surahId === surah.number ? true : false}
            />
          ))}
        </div>
      ) : (
        <div className='absolute bottom-[50%] left-0 right-0 w-full text-center'>
          <h5 className='font-bold text-2xl text-orange-800 dark:text-orange-100'>
            Data tidak ditemukan
          </h5>
        </div>
      )}
    </>
  );
};

export default memo(SurahList);
