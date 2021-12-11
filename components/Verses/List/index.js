import React, { useEffect, useState } from 'react';
import { scroller } from 'react-scroll';
import { useRouter } from 'next/router';
import { ModalAutoNext, ModalTafsir, VerseItem } from '@/components';

const ListVerses = ({ detailSurah, versesID }) => {
  const { query } = useRouter();
  const [isPlay, setIsPlay] = useState({
    status: false,
    loop: false,
    no: null,
  });

  const [detailAyat, setDetailAyat] = useState({});
  const [modalTafsir, setModalTafsir] = useState(false);
  const [modalAutoNext, setModalAutoNext] = useState(false);

  const showModalAutoNext = () => {
    setModalAutoNext(true);
  };
  const closeModalAutoNext = () => {
    setModalAutoNext(false);
  };

  const showModalTafsir = (data) => {
    setModalTafsir(true);
    setDetailAyat(data);
  };
  const closeModalTafsir = () => {
    setModalTafsir(false);
    setDetailAyat({});
  };

  const handlePlay = (no) => {
    setIsPlay((prev) => ({
      ...prev,
      loop: false,
      status: no !== prev.no ? true : !prev.status,
      no,
    }));
  };
  const handleLoop = (no) => {
    setIsPlay((prev) => ({
      ...prev,
      loop: !prev.loop,
      no,
    }));
  };
  const handleEnd = (no, isNext) => {
    if (isNext) {
      const status = no < detailSurah.verses.length ? true : false;
      const nextNo = no < detailSurah.verses.length ? (no += 1) : no;
      setIsPlay((prev) => ({
        ...prev,
        loop: false,
        status: status,
        no: nextNo,
      }));
      scroller.scrollTo(`${nextNo}`, {
        duration: 1000,
        delay: 100,
        smooth: true,
        offset: -110,
      });
      if (localStorage.getItem('autoPlay')) {
        localStorage.removeItem('autoPlay');
      }
      if (Number(query.surahId[0]) < 114 && status === false) {
        showModalAutoNext();
      }
    } else {
      setIsPlay((prev) => ({ ...prev, loop: false, status: false, no }));
    }
  };
  useEffect(() => {
    if (query.surahId.length > 1) {
      scroller.scrollTo(query.surahId[1], {
        duration: 1000,
        delay: 100,
        smooth: true,
        offset: -110,
      });
    }
    setTimeout(() => {
      if (localStorage.getItem('autoPlay')) {
        handlePlay(1);
      }
    }, 2000);
  }, [query.surahId]);

  return (
    <>
      {modalTafsir && (
        <ModalTafsir
          isOpen={modalTafsir}
          onClose={closeModalTafsir}
          detailAyat={detailAyat}
          detailSurah={detailSurah}
        />
      )}
      {modalAutoNext && (
        <ModalAutoNext isOpen={modalAutoNext} onClose={closeModalAutoNext} />
      )}
      {detailSurah.verses.map((verse, i) => (
        <VerseItem
          showTafsir={showModalTafsir}
          isPlay={isPlay}
          handlePlay={handlePlay}
          handleEnd={handleEnd}
          handleLoop={handleLoop}
          key={i}
          data={verse}
          isDataIdLoading={versesID.isLoading}
          dataID={versesID.data[i]}
        />
      ))}
    </>
  );
};

export default ListVerses;
