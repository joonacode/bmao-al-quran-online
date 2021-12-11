import { Button, IconButton } from '@chakra-ui/button';
import { Box, Flex, Text } from '@chakra-ui/layout';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import { scroller } from 'react-scroll';
import { Skeleton } from '@chakra-ui/react';
import {
  BiPlay,
  BiPause,
  BiRefresh,
  BiCopy,
  BiShareAlt,
  BiCopyAlt,
} from 'react-icons/bi';
import {
  FaFacebookF,
  FaTelegramPlane,
  FaTwitter,
  FaWhatsapp,
  FaBook,
} from 'react-icons/fa';
import { CircularProgress, Progress } from '@chakra-ui/progress';

import copy from 'copy-to-clipboard';
import { useToast } from '@chakra-ui/toast';
import { Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/menu';

const VerseItem = ({
  data,
  dataID,
  isPlay,
  handlePlay,
  handleEnd,
  handleLoop,
  isDataIdLoading,
  showTafsir,
}) => {
  const { locale, query } = useRouter();
  const toast = useToast();

  const [played, setPlayed] = useState({
    loadedSeconds: 0,
    playedSeconds: 0,
  });

  const playAndResetTime = (no) => {
    setPlayed({
      loadedSeconds: 0,
      playedSeconds: 0,
    });
    handlePlay(no);
  };

  const endAndResetTime = () => {
    setPlayed({
      loadedSeconds: 0,
      playedSeconds: 0,
    });
    handleEnd(isPlay.no, true);
  };

  const handleShare = (data, shareBy) => {
    const urlShare = `${
      process.env.NEXT_PUBLIC_MAIN_URL +
      (locale !== 'id' ? 'en/' : '') +
      query.surahId[0]
    }/${data.number.inSurah}`;
    const text = `Q.S ${query.surahId[0]}:${data.number.inSurah} - ${data.text.arab} - ${data.translation[locale]} - ${urlShare}`;
    if (shareBy === 'copy') {
      copy(text);
      toast({
        position: 'bottom-right',
        title: 'Berhasil di salin.',
        status: 'success',
        duration: 2000,
      });
    } else if (shareBy === 'wa') {
      window.open(`https://wa.me/?text=${text}`, '_blank');
    } else if (shareBy === 'fb') {
      window.open(
        `http://www.facebook.com/sharer/sharer.php?u=${urlShare}&t=${text}`,
        '_blank',
      );
    } else if (shareBy === 'tw') {
      window.open(
        `http://www.twitter.com/intent/tweet?url=${urlShare}&text=${text}`,
        '_blank',
      );
    } else if (shareBy === 'tl') {
      window.open(
        `https://t.me/share/url?url=${urlShare}&text=${text}`,
        '_blank',
      );
    }
  };

  const handleClickNo = (no) => {
    scroller.scrollTo(`${no}`, {
      duration: 1000,
      delay: 100,
      smooth: true,
      offset: -110,
    });
  };

  return (
    <Box w='full' mb={10} id={`${data.number.inSurah}`}>
      <Flex alignItems='center' mb={5}>
        <Button
          onClick={() => handleClickNo(data.number.inSurah)}
          mr={2}
          colorScheme='gray'
          size='sm'
        >
          {data.number.inSurah}
        </Button>
        <IconButton
          onClick={() => playAndResetTime(data.number.inSurah)}
          colorScheme='blue'
          size='sm'
          mr={2}
          aria-label='Play & Pause'
          icon={
            isPlay.status && isPlay.no === data.number.inSurah ? (
              <BiPause />
            ) : (
              <BiPlay />
            )
          }
        />
        {isPlay.status && isPlay.no === data.number.inSurah && (
          <>
            <ReactPlayer
              onEnded={endAndResetTime}
              loop={isPlay.loop && isPlay.no === data.number.inSurah}
              onProgress={(progress) => {
                setPlayed({
                  playedSeconds: parseFloat(progress.playedSeconds),
                  loadedSeconds: progress.loadedSeconds,
                });
              }}
              style={{ display: 'none' }}
              progressInterval={10}
              playing={isPlay.status}
              url={data.audio.primary}
            />
            <IconButton
              title='Loop'
              onClick={() => handleLoop(data.number.inSurah)}
              colorScheme={'teal'}
              variant={
                !isPlay.loop && isPlay.no === data.number.inSurah
                  ? 'outline'
                  : 'solid'
              }
              size='sm'
              mr={2}
              aria-label='Search database'
              icon={<BiRefresh />}
            />
          </>
        )}

        <Menu size={true}>
          <MenuButton
            boxSize='2rem'
            as={IconButton}
            aria-label='Options'
            icon={<BiShareAlt />}
            colorScheme='green'
          />
          <MenuList>
            <MenuItem
              onClick={() => handleShare(data, 'copy')}
              icon={<BiCopy />}
            >
              Salin Link
            </MenuItem>
            <MenuItem
              onClick={() => handleShare(data, 'wa')}
              icon={<FaWhatsapp />}
            >
              Whatsapp
            </MenuItem>
            <MenuItem
              onClick={() => handleShare(data, 'fb')}
              icon={<FaFacebookF />}
            >
              Facebook
            </MenuItem>
            <MenuItem
              onClick={() => handleShare(data, 'tw')}
              icon={<FaTwitter />}
            >
              Twiiter
            </MenuItem>
            <MenuItem
              onClick={() => handleShare(data, 'tl')}
              icon={<FaTelegramPlane />}
            >
              Telegram
            </MenuItem>
          </MenuList>
        </Menu>
        {locale === 'id' && (
          <IconButton
            title='tafsir'
            onClick={() => showTafsir(data)}
            colorScheme={'teal'}
            variant='solid'
            size='sm'
            ml={2}
            icon={<FaBook />}
          />
        )}
      </Flex>
      <Text fontSize={36} mb={5} className='fontAlQalam' textAlign='right'>
        {data.text.arab}
      </Text>
      {locale === 'en' ? (
        <Text>{data.text.transliteration.en}</Text>
      ) : (
        <>
          {isDataIdLoading ? (
            <Skeleton height='20px' />
          ) : (
            <Box
              dangerouslySetInnerHTML={{ __html: dataID?.tr }}
              textTransform='initial'
            />
          )}
        </>
      )}
      <Text mt={3}>{data.translation[locale]}</Text>
      {isPlay.status && isPlay.no === data.number.inSurah ? (
        <Progress
          transition={'all'}
          mt={10}
          colorScheme='gray'
          height='1px'
          max={played.loadedSeconds}
          value={played.playedSeconds}
        />
      ) : (
        <Progress mt={10} colorScheme='gray' height='1px' value={0} />
      )}
    </Box>
  );
};

export default VerseItem;
