import { createContext, useCallback, useMemo, useState } from 'react';

interface State {
  totalAyat: number;
  changeTotalAyat: (v: number) => void;
  surahId: number;
  changeSurahId: (v: number) => void;
  page: number;
  changePage: () => void;
  totalShowData: number;
  resetValue: () => void;
  customChangeTotalShowdata: () => void;
  changeTotalShowdata: () => void;
}

const DetailSurahContext = createContext<State>({
  totalAyat: 0,
  changeTotalAyat: () => null,
  surahId: 1,
  changeSurahId: () => null,
  page: 1,
  changePage: () => null,
  totalShowData: 10,
  resetValue: () => null,
  changeTotalShowdata: () => null,
  customChangeTotalShowdata: () => null,
});

interface IProvider {
  children: React.ReactNode;
}

const DetailSurahProvider = ({ children }: IProvider) => {
  const [page, setPage] = useState(1);
  const [surahId, setSurahId] = useState(1);
  const [totalShowData, setTotalShowData] = useState(10);
  const [totalAyat, setTotalAyat] = useState(0);

  const changeSurahId = useCallback((v: number) => {
    setSurahId(v);
  }, []);

  const changeTotalAyat = useCallback((v: number) => {
    setTotalAyat(v);
  }, []);

  const changePage = useCallback(() => {
    setPage((prev) => (prev += 1));
  }, []);

  const changeTotalShowdata = useCallback(() => {
    setTotalShowData(page * 10);
  }, [page]);

  const customChangeTotalShowdata = useCallback(() => {
    setTotalShowData(totalAyat);
  }, [totalAyat]);

  const resetValue = useCallback(() => {
    setPage(1);
    setTotalShowData(10);
  }, []);

  const value = useMemo(
    () => ({
      totalAyat,
      changeTotalAyat,
      page,
      totalShowData,
      changePage,
      resetValue,
      changeTotalShowdata,
      customChangeTotalShowdata,
      surahId,
      changeSurahId,
    }),
    [
      totalAyat,
      changeTotalAyat,
      page,
      totalShowData,
      changePage,
      resetValue,
      changeTotalShowdata,
      customChangeTotalShowdata,
      surahId,
      changeSurahId,
    ],
  );

  return <DetailSurahContext.Provider value={value}>{children}</DetailSurahContext.Provider>;
};

export { DetailSurahContext, DetailSurahProvider };
