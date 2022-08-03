import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from '@components/common';
import { IModalProps } from '@constants/types';
import { memo } from 'react';

interface ModalSettingProps { }

const ModalSetting: React.FC<ModalSettingProps & IModalProps> = ({ isOpen, onClose }) => {
  return (
    <Modal size='lg' isOpen={isOpen} onClose={onClose}>
      <ModalHeader>Setting</ModalHeader>
      <ModalBody>
        <p>Body</p>
      </ModalBody>
      <ModalFooter>
        <Button onClick={onClose}>Tutup</Button>
      </ModalFooter>
    </Modal>
  );
};

export default memo(ModalSetting);
