import { createContext, useCallback, useMemo, useState } from 'react';

interface State {
  search: string;
  changeSearch: (v: string) => void;
}

const AppContext = createContext<State>({
  search: '',
  changeSearch: () => null,
});

interface IProvider {
  children: React.ReactNode;
}

const AppProvider = ({ children }: IProvider) => {
  const [search, setSearch] = useState('');

  const changeSearch = useCallback((value: string) => {
    setSearch(value);
  }, []);

  const value = useMemo(
    () => ({
      search,
      changeSearch,
    }),
    [search, changeSearch],
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export { AppContext, AppProvider };
