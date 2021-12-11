import React from 'react';
import { Text } from '@chakra-ui/layout';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Box,
} from '@chakra-ui/react';
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
const ModalTafsir = ({ isOpen, onClose, detailSurah, detailAyat }) => {
  const { locale } = useRouter();

  return (
    <div>
      <Modal size={'4xl'} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            Tafsir Q.S {detailSurah.name.transliteration[locale]} ayat{' '}
            {detailAyat.number.inSurah}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text
              fontSize={36}
              mb={5}
              className='fontAlQalam'
              textAlign='right'
            >
              {detailAyat.text.arab}
            </Text>
            <Accordion defaultIndex={[0]}>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box flex='1' textAlign='left'>
                      Tafsir Ringkas
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  {detailAyat.tafsir[locale].short}
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box flex='1' textAlign='left'>
                      Tafsir Panjang
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  {detailAyat.tafsir[locale].long}
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Tutup
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default ModalTafsir;
