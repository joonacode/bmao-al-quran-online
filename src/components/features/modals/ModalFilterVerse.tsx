import { Modal, ModalBody, ModalHeader } from '@components/common';
import { IModalProps } from '@constants/types';
import { DetailSurahContext } from '@context/DetailSurahContext';
import scrollToAyat from '@utils/scrollToAyat';
import { useContext } from 'react';

const ModalFilterVerse: React.FC<IModalProps> = ({ isOpen, onClose }) => {
  const { totalShowData, customChangeTotalShowdata, totalAyat } = useContext(DetailSurahContext);

  const handleClick = async (e: number) => {
    if (totalShowData < totalAyat) {
      customChangeTotalShowdata();
    }
    if (totalShowData >= totalAyat || totalAyat <= 10) {
      scrollToAyat(e, 200, 0);
      onClose();
      return;
    }
    setTimeout(() => {
      scrollToAyat(e, 200, 0);
      onClose();
    }, 1000);
  };
  return (
    <Modal size='xs' isOpen={isOpen} onClose={onClose}>
      <ModalHeader>Pilih Ayat</ModalHeader>
      <ModalBody>
        <div>
          {Array(totalAyat)
            .fill('')
            .map((_, i) => (
              <div
                onClick={() => handleClick(i + 1)}
                className='py-2 cursor-pointer'
                key={`filter-${i}`}
              >
                <p>Ayat ke {i + 1}</p>
              </div>
            ))}
        </div>
      </ModalBody>
    </Modal>
  );
};

export default ModalFilterVerse;
