import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from '@components/common';
import { IModalProps, IVerse } from '@constants/types';
import { DetailSurahContext } from '@context/DetailSurahContext';
import { memo, useContext } from 'react';
import Accordion from '../Accordion';

interface ModalTafsirVerseProps {
  detailAyat: IVerse | undefined;
  surahName: string;
  nextTafsir: () => void;
  prevTafsir: () => void;
}

const ModalTafsirVerse: React.FC<ModalTafsirVerseProps & IModalProps> = ({
  isOpen,
  onClose,
  surahName,
  detailAyat,
  nextTafsir,
  prevTafsir,
}) => {
  const { totalAyat } = useContext(DetailSurahContext);
  return (
    <Modal size='lg' isOpen={isOpen} onClose={onClose}>
      <ModalHeader>
        <p>
          Tafsir Q.S {surahName} ayat {detailAyat?.number.inSurah}
        </p>
      </ModalHeader>
      <ModalBody>
        <Accordion data={detailAyat?.tafsir.id} />
      </ModalBody>
      <ModalFooter disableFlexEnd>
        <div className='flex items-center justify-between w-full'>
          <Button variant='warning' onClick={onClose}>
            Tutup
          </Button>
          <div>
            {(detailAyat?.number.inSurah || 0) > 1 && (
              <Button onClick={prevTafsir}>Sebelumnya</Button>
            )}
            {(detailAyat?.number.inSurah || 0) < totalAyat && (
              <Button className='ml-2' onClick={nextTafsir}>
                Selanjutnya
              </Button>
            )}
          </div>
        </div>
      </ModalFooter>
    </Modal>
  );
};

export default memo(ModalTafsirVerse);
