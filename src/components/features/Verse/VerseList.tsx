import { IResDetailSurah, ITranslateSurahId, IVerse } from '@constants/types';
import VerseItem from './VerseItem';
import InfiniteScroll from 'react-infinite-scroll-component';
import { memo, useCallback, useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import ModalTafsirVerse from '../modals/ModalTafsirVerse';
import getLocale from '@utils/getLocale';
import ModalShare from '../modals/ModalShare';
import ModalAutoNext from '../modals/ModalAutoNext';
import scrollToAyat from '@utils/scrollToAyat';
import { DetailSurahContext } from '@context/DetailSurahContext';

interface VerseListProps {
  detailSurah: IResDetailSurah;
  verseId: ITranslateSurahId[];
}

const VerseList: React.FC<VerseListProps> = ({ detailSurah, verseId }) => {
  const { page, totalShowData, changePage, changeTotalShowdata, customChangeTotalShowdata } =
    useContext(DetailSurahContext);
  const { locale: localeRouter, query, push } = useRouter();
  const locale = getLocale(localeRouter);

  const [isPlay, setIsPlay] = useState({
    status: false,
    loop: false,
    no: null,
  });

  const [detailAyat, setDetailAyat] = useState<IVerse | undefined>(undefined);
  const [modalTafsir, setModalTafsir] = useState(false);
  const [modalAutoNext, setModalAutoNext] = useState(false);
  const [modalShare, setModalShare] = useState(false);

  const showModalShare = useCallback((data) => {
    setModalShare(true);
    setDetailAyat(data);
  }, []);

  const closeModalShare = useCallback(() => {
    setModalShare(false);
  }, []);

  const showModalAutoNext = () => {
    setModalAutoNext(true);
  };
  const closeModalAutoNext = () => {
    setModalAutoNext(false);
  };

  const showTafsir = useCallback((data) => {
    setModalTafsir(true);
    setDetailAyat(data);
  }, []);

  const nextTafsir = useCallback(() => {
    scrollToAyat((detailAyat?.number.inSurah || 0) + 1);
    setDetailAyat((prev) =>
      detailSurah.verses.find((val) => val.number.inSurah === (prev?.number.inSurah || 0) + 1),
    );
  }, [detailSurah.verses, detailAyat]);

  const prevTafsir = useCallback(() => {
    scrollToAyat((detailAyat?.number.inSurah || 0) - 1);
    setDetailAyat((prev) =>
      detailSurah.verses.find((val) => val.number.inSurah === (prev?.number.inSurah || 0) - 1),
    );
  }, [detailSurah.verses, detailAyat]);

  const closeModalTafsir = useCallback(() => {
    setModalTafsir(false);
  }, []);

  // Play audio
  const handlePlay = useCallback((no) => {
    setIsPlay((prev) => ({
      ...prev,
      loop: false,
      status: no !== prev.no ? true : !prev.status,
      no,
    }));
  }, []);

  // Loop Audio
  const handleLoop = useCallback((no) => {
    setIsPlay((prev) => ({
      ...prev,
      loop: !prev.loop,
      no,
    }));
  }, []);

  // End Audio
  const handleEnd = useCallback(
    (no, isNext) => {
      if (isNext) {
        const status = no < detailSurah.verses.length ? true : false;
        const nextNo = no < detailSurah.verses.length ? (no += 1) : no;
        setIsPlay((prev) => ({
          ...prev,
          loop: false,
          status: status,
          no: nextNo,
        }));
        scrollToAyat(nextNo);
        if (localStorage.getItem('autoPlay')) {
          localStorage.removeItem('autoPlay');
        }
        if (Number(detailSurah.number) < 114 && status === false) {
          showModalAutoNext();
        }
      } else {
        setIsPlay((prev) => ({ ...prev, loop: false, status: false, no }));
      }
    },
    [detailSurah.verses, detailSurah.number],
  );

  // Set total show data
  useEffect(() => {
    if (page !== 1) {
      changeTotalShowdata();
    }
  }, [page, changeTotalShowdata]);

  // Auto play audio
  useEffect(() => {
    setTimeout(() => {
      if (localStorage.getItem('autoPlay')) {
        handlePlay(1);
      }
    }, 2000);
  }, [detailSurah.number, handlePlay]);

  useEffect(() => {
    if (query.surahId) {
      // Reset state when cange page
      setIsPlay({
        status: false,
        loop: false,
        no: null,
      });
      setModalTafsir(false);
      // Reset state when cange page
      if (query.surahId.length > 1) {
        const ayat = Number(query.surahId[1]);
        if (isNaN(Number(ayat))) push('/404');
        if (ayat <= 10) {
          scrollToAyat(`${ayat}`);
          return;
        }
        customChangeTotalShowdata();
        setTimeout(() => {
          scrollToAyat(`${ayat}`);
        }, 1000);
      }
    }
  }, [query, detailSurah, push, customChangeTotalShowdata]);

  return (
    <div className='overflow-hidden'>
      <InfiniteScroll
        dataLength={detailSurah.verses.slice(0, totalShowData).length} //This is important field to render the next data
        next={changePage}
        hasMore={totalShowData < detailSurah.verses.length}
        loader={<h4>Loading...</h4>}
      >
        {detailSurah.verses.slice(0, totalShowData).map((verse: IVerse, i) => (
          <VerseItem
            key={i}
            data={verse}
            showModalShare={showModalShare}
            showTafsir={showTafsir}
            isPlay={verse.number.inSurah === isPlay.no && isPlay.status}
            isLoop={verse.number.inSurah === isPlay.no && isPlay.loop}
            handlePlay={handlePlay}
            handleEnd={handleEnd}
            handleLoop={handleLoop}
            dataID={verseId[i]}
          />
        ))}
      </InfiniteScroll>
      {modalAutoNext && (
        <ModalAutoNext
          locale={locale}
          currentNoSurah={detailSurah.number}
          isOpen={modalAutoNext}
          onClose={closeModalAutoNext}
        />
      )}
      {modalShare && (
        <ModalShare
          noSurah={detailSurah.number}
          detailAyat={detailAyat}
          locale={locale}
          isOpen={modalShare}
          onClose={closeModalShare}
          surahName={detailSurah.name.transliteration[locale]}
        />
      )}
      {modalTafsir && (
        <ModalTafsirVerse
          nextTafsir={nextTafsir}
          prevTafsir={prevTafsir}
          detailAyat={detailAyat}
          surahName={detailSurah.name.transliteration[locale]}
          isOpen={modalTafsir}
          onClose={closeModalTafsir}
        />
      )}
    </div>
  );
};

export default memo(VerseList);
