import { Button, Modal, ModalBody } from '@components/common';
import { IModalProps } from '@constants/types';
import { DetailSurahContext } from '@context/DetailSurahContext';
import list_surah from '@utils/data/list_surah';
import { useRouter } from 'next/router';
import { useContext, useEffect, useState } from 'react';

interface ModalAutoNextProps {
  currentNoSurah: number;
  locale: 'id' | 'en';
}

const ModalAutoNext: React.FC<ModalAutoNextProps & IModalProps> = ({
  isOpen,
  onClose,
  currentNoSurah,
  locale,
}) => {
  const { resetValue } = useContext(DetailSurahContext);
  const [progressVal, setProgressVal] = useState(10);
  const { push } = useRouter();

  const handleNext = () => {
    resetValue();
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    localStorage.setItem('autoPlay', 'true');
    push(`/${currentNoSurah + 1}`, `/${currentNoSurah + 1}`, { locale });
  };

  const resetModal = (isBtn: boolean) => {
    if (isBtn) {
      localStorage.removeItem('autoPlay');
    }
    onClose();
    setProgressVal(10);
  };

  useEffect(() => {
    if (progressVal > 0) {
      setTimeout(() => {
        setProgressVal((prev) => prev - 1);
      }, 1000);
    } else {
      handleNext();
      resetModal(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [progressVal]);

  return (
    <Modal zIndex='z-[100]' size='xs' isOpen={isOpen} closeOnClickOverlay={false} onClose={onClose}>
      <ModalBody>
        <div className='py-4 flex flex-col justify-center items-center'>
          <div className='flex items-center gap-2 flex-wrap text-md'>
            <p>{locale === 'id' ? 'Selanjutnya Surat' : 'Next Surah'}</p>
            <p>
              {
                list_surah.find((sura) => sura.number === currentNoSurah + 1)?.name.transliteration[
                  locale
                ]
              }
            </p>
          </div>
          <p className='my-5 text-4xl font-bold'>{progressVal}</p>
          <div className='flex items-center gap-2'>
            <Button onClick={() => resetModal(true)}>Tutup</Button>
            <Button
              onClick={() => {
                handleNext();
                resetModal(false);
              }}
              variant='success'
            >
              Selanjutnya
            </Button>
          </div>
        </div>
      </ModalBody>
    </Modal>
  );
};

export default ModalAutoNext;
