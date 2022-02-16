import { useTheme } from 'next-themes';
import { BiSun, BiMoon } from 'react-icons/bi';

const ToggleDarkMode = () => {
  const { theme, setTheme } = useTheme();

  return (
    <button
      title={theme === 'light' ? 'Change to dark theme' : 'Change to light theme'}
      className='transition  delay-200 duration-1000 ease-in-out'
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      {theme === 'light' ? <BiMoon className={`text-2xl`} /> : <BiSun className={`text-2xl`} />}
    </button>
  );
};

export default ToggleDarkMode;
