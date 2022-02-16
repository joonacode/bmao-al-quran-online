import { Button, Spinner } from '@components/common';
import { ITranslateSurahId, IVerse } from '@constants/types';
import getLocale from '@utils/getLocale';
import { useRouter } from 'next/router';
import { memo, useCallback, useState } from 'react';
import { BiPlay, BiPause, BiRefresh, BiShareAlt, BiBookAlt } from 'react-icons/bi';
import ReactPlayer from 'react-player';
import ProgressBar from '@ramonak/react-progress-bar';
import { toast } from 'react-toastify';
import scrollToAyat from '@utils/scrollToAyat';

interface VerseItemProps {
  isPlay: boolean;
  isLoop: boolean;
  data: IVerse;
  isDataIdLoading?: boolean;
  dataID: ITranslateSurahId;
  showTafsir: (data: IVerse) => void;
  showModalShare: (data: IVerse) => void;
  handlePlay: (no: number) => void;
  handleEnd: (no: number, isNext: boolean) => void;
  handleLoop: (no: number) => void;
}

const VerseItem: React.FC<VerseItemProps> = ({
  showTafsir,
  showModalShare,
  handleEnd,
  handleLoop,
  handlePlay,
  isLoop,
  isPlay,
  data,
  dataID,
}) => {
  const { locale: localeRouter } = useRouter();
  const locale = getLocale(localeRouter);

  const handleOnError = (param: number) => {
    toast.error('Gagal memuat audio, silahkan cek koneksi anda');
    setTotalDuration(0);
    setPlayed({
      loadedSeconds: 0,
      playedSeconds: 0,
    });
    handleEnd(param, false);
  };

  const handleOnDuration = (v: number) => {
    setTotalDuration(Math.floor(v));
  };

  const [totalDuration, setTotalDuration] = useState(0);

  const [played, setPlayed] = useState({
    loadedSeconds: 0,
    playedSeconds: 0,
  });

  const endAndResetTime = useCallback(() => {
    setTotalDuration(0);
    setPlayed({
      loadedSeconds: 0,
      playedSeconds: 0,
    });
    handleEnd(data.number.inSurah, true);
  }, [handleEnd, data.number.inSurah]);

  const handlePlayAndReset = useCallback(
    (number: number) => {
      setTotalDuration(0);
      setPlayed({
        loadedSeconds: 0,
        playedSeconds: 0,
      });
      handlePlay(number);
    },
    [handlePlay],
  );

  const handleClickNo = (no: number) => {
    scrollToAyat(no);
  };

  return (
    <div className='mb-10' id={`ayat-${data.number.inSurah}`}>
      <div className='flex items-center gap-2 mb-9'>
        <Button onClick={() => handleClickNo(data.number.inSurah)} size='sm'>
          <span className='text-xl'>{data.number.inSurah}</span>
        </Button>
        <Button
          title={isPlay ? 'Stop' : 'Play'}
          size='sm'
          variant='primary'
          onClick={() => handlePlayAndReset(data.number.inSurah)}
        >
          {isPlay && totalDuration > 0 ? (
            <BiPause className='text-lg' />
          ) : isPlay && totalDuration <= 0 ? (
            <Spinner className='text-lg' />
          ) : (
            <BiPlay className='text-lg' />
          )}
        </Button>
        {isPlay && (
          <>
            <ReactPlayer
              onEnded={endAndResetTime}
              loop={isLoop}
              onError={() => (isPlay ? handleOnError(data.number.inSurah) : () => null)}
              onDuration={handleOnDuration}
              onProgress={(progress) => {
                setPlayed({
                  playedSeconds: parseFloat(`${Math.ceil(progress.playedSeconds)}`),
                  loadedSeconds: parseFloat(`${progress.loadedSeconds}`),
                });
              }}
              style={{ display: 'none' }}
              progressInterval={1000}
              playing={isPlay}
              url={data.audio.primary}
            />
            {totalDuration > 0 && (
              <Button
                size='sm'
                variant={isLoop ? 'warning' : 'outlineWarning'}
                onClick={() => handleLoop(data.number.inSurah)}
                title='Loop'
              >
                <BiRefresh className='text-lg' />
              </Button>
            )}
          </>
        )}
        <Button onClick={() => showModalShare(data)} title='Share' size='sm' variant='success'>
          <BiShareAlt className='text-lg' />
        </Button>
        {locale === 'id' && (
          <Button onClick={() => showTafsir(data)} title='Tafsir' size='sm' variant='secondary'>
            <BiBookAlt className='text-lg' />
          </Button>
        )}
      </div>

      <p className='text-4xl fontAlQalam text-right mb-7'>{data.text.arab}</p>
      {/* Check transliteration */}
      <div className='mb-5 md:text-xl text-base'>
        {locale === 'en' ? (
          <p>{data.text.transliteration.en}</p>
        ) : (
          <div dangerouslySetInnerHTML={{ __html: dataID?.tr }} />
        )}
      </div>
      {/* Check transliteration */}
      <p className='mb-5 md:text-xl text-base'>{data.translation[locale]}</p>
      <div className='mt-8'>
        <ProgressBar
          barContainerClassName='bg-gray-200 dark:bg-gray-600 completedVal'
          borderRadius={'0px'}
          height={'1px'}
          completed={isPlay ? played.playedSeconds : 0}
          isLabelVisible={false}
          maxCompleted={totalDuration}
          ariaValuemax={played.loadedSeconds}
        />
      </div>
    </div>
  );
};

export default memo(VerseItem);
