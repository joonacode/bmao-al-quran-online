import React, { useEffect, useState } from 'react';
import { Text } from '@chakra-ui/layout';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  CircularProgress,
  Button,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import list_surah from '@/list_surah';
const ModalAutoNext = ({ isOpen, onClose }) => {
  const [progressVal, setProgressVal] = useState(0);
  const { locale, query, push } = useRouter();
  useEffect(() => {
    if (progressVal <= 102) {
      setTimeout(() => {
        setProgressVal((prev) => prev + 2);
      }, 100);
    } else {
      handleNext();
      resetModal();
    }
  }, [progressVal]);
  const handleNext = () => {
    localStorage.setItem('autoPlay', 'true');
    push(
      `/${Number(query.surahId[0]) + 1}`,
      `/${Number(query.surahId[0]) + 1}`,
      { locale },
    );
  };

  const resetModal = (isBtn) => {
    if (isBtn) {
      localStorage.removeItem('autoPlay');
    }
    onClose();
    setProgressVal(0);
  };

  return (
    <div>
      <Modal
        isOpen={isOpen}
        closeOnOverlayClick={false}
        isCentered
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalBody
            py={10}
            display='flex'
            flexDir='column'
            justifyContent={'center'}
            alignItems={'center'}
          >
            <CircularProgress
              value={progressVal}
              size={'70px'}
              color='orange.400'
              thickness='10px'
            />
            <Text mt={4}>
              {locale === 'id' ? 'Selanjutnya Surat' : 'Next Surah'}{' '}
              {
                list_surah.find(
                  (sura) => sura.number === Number(query.surahId[0]) + 1,
                ).name.transliteration[locale]
              }
            </Text>
            <Button onClick={() => resetModal(true)} mt={4}>
              {locale === 'id' ? 'Tutup' : 'Close'}
            </Button>
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default ModalAutoNext;
