import React, { useEffect, useState } from 'react';
import { scroller } from 'react-scroll';
import { useRouter } from 'next/router';
import { ModalTafsir, VerseItem } from '@/components';

const ListVerses = ({ detailSurah, versesID }) => {
  const { query, push } = useRouter();
  const [isPlay, setIsPlay] = useState({
    status: false,
    loop: false,
    no: null,
  });

  const [detailAyat, setDetailAyat] = useState({});
  const [modalTafsir, setModalTafsir] = useState(false);
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
