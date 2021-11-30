import { Text } from '@chakra-ui/layout';
import React, { useEffect, useState } from 'react';
import { scroller } from 'react-scroll';
import { useRouter } from 'next/router';
import { VerseItem } from '@/components';
const ListVerses = ({ verses, versesID }) => {
  const { query, push } = useRouter();
  const [isPlay, setIsPlay] = useState({
    status: false,
    loop: false,
    no: null,
  });

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
      const status = no < verses.length ? true : false;
      const nextNo = no < verses.length ? (no += 1) : no;
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
    <div>
      {verses.map((verse, i) => (
        <VerseItem
          isPlay={isPlay}
          handlePlay={handlePlay}
          handleEnd={handleEnd}
          handleLoop={handleLoop}
          key={i}
          data={verse}
          dataID={versesID[i]}
        />
      ))}
    </div>
  );
};

export default ListVerses;
