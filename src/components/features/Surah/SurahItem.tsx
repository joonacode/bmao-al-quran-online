import { Badge, Spinner } from '@components/common';
import { IDetailSurah } from '@constants/types';
import getLocale from '@utils/getLocale';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { memo, useState } from 'react';
import { FcInfo } from 'react-icons/fc';
import { Popover, ArrowContainer } from 'react-tiny-popover';
import { Fade } from 'react-awesome-reveal';

interface SurahItemProps {
  data: IDetailSurah;
  isLoading?: boolean;
  changePage: (p: number) => void;
}

const SurahItem: React.FC<SurahItemProps> = ({ data, isLoading, changePage }) => {
  const { locale: routerLocale } = useRouter();
  const locale = getLocale(routerLocale);
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  return (
    <div className='relative rounded-md'>
      <div className='rounded-md shadow-lg border-[1px] border-gray-200/50 dark:border-gray-700/50 bg-gray-100/50 shadow-gray-200/30 dark:bg-custom-secondary dark:shadow-custom-primary px-6 py-5 flex items-center gap-5'>
        <p className='font-bold'>{data.number}.</p>
        <div className='flex-1'>
          <Link href={`/${data.number}`} locale={locale}>
            <a
              onClick={() => changePage(data.number)}
              className='flex items-center justify-between mb-3'
            >
              <p className='text-lg'>{data.name.transliteration[locale]}</p>
              <p className='text-lg'>{data.name.short}</p>
            </a>
          </Link>
          <div className='flex items-center justify-between'>
            <div className='flex gap-2'>
              <Badge variant='primary' title={data.revelation[locale]} />
              <Badge variant='primary' title={`${data.numberOfVerses} Ayat`} />
            </div>
            {locale === 'id' && (
              <Popover
                isOpen={isPopoverOpen}
                onClickOutside={() => setIsPopoverOpen(false)}
                positions={data.number > 111 ? ['top'] : ['bottom']}
                content={({ position, childRect, popoverRect }) => (
                  <Fade duration={400} delay={0}>
                    <ArrowContainer
                      position={position}
                      childRect={childRect}
                      popoverRect={popoverRect}
                      arrowColor={'blue'}
                      arrowSize={10}
                      arrowStyle={{ opacity: 0.7 }}
                      className='popover-arrow-container'
                      arrowClassName='popover-arrow'
                    >
                      <div
                        className='sm:w-[400px] w-full p-3 rounded-lg shadow-sm bg-white dark:bg-gray-700 border-[1px] border-gray-200 dark:border-gray-500'
                        onClick={() => setIsPopoverOpen(!isPopoverOpen)}
                      >
                        {data.tafsir.id}
                      </div>
                    </ArrowContainer>
                  </Fade>
                )}
              >
                <div onClick={() => setIsPopoverOpen(!isPopoverOpen)}>
                  <FcInfo className='text-xl cursor-pointer' />
                </div>
              </Popover>
            )}
          </div>
        </div>
      </div>
      {isLoading && (
        <div className='absolute left-0 right-0 top-0 bottom-0 w-full h-full bg-gray-900/30'>
          <div className='flex items-center justify-center h-full'>
            <Spinner className='text-3xl' />
          </div>
        </div>
      )}
    </div>
  );
};

export default memo(SurahItem);
