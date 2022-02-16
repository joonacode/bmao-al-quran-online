import { Modal, ModalBody } from '@components/common';
import { IModalProps, IVerse } from '@constants/types';
import { memo } from 'react';
import copy from 'copy-to-clipboard';
import { BiCopy } from 'react-icons/bi';
import { FaFacebookF, FaTelegramPlane, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { toast } from 'react-toastify';
import textTranslate from '@utils/data/textTranslate';

interface ModalShareProps {
  detailAyat: IVerse | undefined;
  locale: 'id' | 'en';
  noSurah: number;
  surahName: string;
}

const ModalShare: React.FC<ModalShareProps & IModalProps> = ({
  isOpen,
  onClose,
  locale,
  detailAyat,
  noSurah,
  surahName,
}) => {
  const handleShare = (shareBy: string) => {
    const urlShare = `${
      process.env.NEXT_PUBLIC_MAIN_URL + (locale !== 'id' ? 'en' : '') + noSurah
    }/${detailAyat?.number.inSurah}`;
    const text = `Q.S ${noSurah}:${detailAyat?.number.inSurah} - ${detailAyat?.text.arab} - ${detailAyat?.translation[locale]} - ${urlShare}`;
    if (shareBy === 'copy') {
      toast.success(textTranslate.textCopySuccess[locale]);
      copy(text);
    } else if (shareBy === 'wa') {
      window.open(`https://wa.me/?text=${text}`, '_blank');
    } else if (shareBy === 'fb') {
      window.open(`http://www.facebook.com/sharer/sharer.php?u=${urlShare}&t=${text}`, '_blank');
    } else if (shareBy === 'tw') {
      window.open(`http://www.twitter.com/intent/tweet?url=${urlShare}&text=${text}`, '_blank');
    } else if (shareBy === 'tl') {
      window.open(`https://t.me/share/url?url=${urlShare}&text=${text}`, '_blank');
    }
  };

  return (
    <Modal size='xs' isOpen={isOpen} onClose={onClose}>
      <ModalBody>
        <div className='py-4'>
          <h5 className='mb-7 text-xl font-bold text-center'>
            Q.S {surahName} {locale === 'id' ? 'ayat' : 'verse'} {detailAyat?.number.inSurah}
          </h5>
          <div className='flex flex-col gap-5'>
            <ShareItem
              title={textTranslate.textCopy[locale]}
              icon={<BiCopy />}
              onClick={() => handleShare('copy')}
            />
            <ShareItem title='Whatsapp' icon={<FaWhatsapp />} onClick={() => handleShare('wa')} />
            <ShareItem title='Facebook' icon={<FaFacebookF />} onClick={() => handleShare('fb')} />
            <ShareItem title='Twitter' icon={<FaTwitter />} onClick={() => handleShare('tw')} />
            <ShareItem
              title='Telegram'
              icon={<FaTelegramPlane />}
              onClick={() => handleShare('tl')}
            />
          </div>
        </div>
      </ModalBody>
    </Modal>
  );
};

interface ShareItemProps {
  title: string;
  icon: JSX.Element;
  onClick: () => void;
}

const ShareItem: React.FC<ShareItemProps> = ({ title, icon, onClick }) => {
  return (
    <div onClick={onClick} className='flex items-center gap-3 cursor-pointer'>
      <span className='text-xl'>{icon}</span>
      <p>{title}</p>
    </div>
  );
};

export default memo(ModalShare);
