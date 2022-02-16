export interface IVerse {
  audio: {
    primary: string;
    secondary: string[];
  };
  meta: {
    hizbQuarter: number;
    juz: number;
    manzil: number;
    page: number;
    ruku: number;
    sajda: {
      obligatory: boolean;
      recommended: boolean;
    };
  };
  number: {
    inQuran: number;
    inSurah: number;
  };
  tafsir: {
    id: {
      short: string;
      long: string;
    };
  };
  text: {
    arab: string;
    transliteration: { en: string; id: string };
  };
  translation: { en: string; id: string };
}

export interface IDetailSurah {
  name: {
    short: string;
    long: string;
    transliteration: { en: string; id: string };
    translation: { en: string; id: string };
  };
  number: number;
  numberOfVerses: number;
  preBismillah?: {
    audio: {
      primary: string;
      secondary: string[];
    };
    text: {
      arab: string;
      transliteration: { en: string; id: string };
    };
    translation: { en: string; id: string };
  };
  revelation: { arab: string; en: string; id: string };
  sequence: number;
  tafsir: {
    id: string;
  };
}

export interface ITranslateSurahId {
  ar: string;
  id: string;
  nomor: string;
  tr: string;
}

export interface IResDetailSurah extends IDetailSurah {
  verses: IVerse[];
}

export interface IModalProps {
  isOpen: boolean;
  onClose: () => void;
}
