import { scroller } from 'react-scroll';

export default function scrollToAyat(
  ayat: string | number,
  duration: number = 1000,
  delay: number = 100,
  offset: number = -110,
) {
  scroller.scrollTo(`ayat-${ayat}`, {
    duration,
    delay,
    smooth: true,
    offset,
  });
}
