export default function getLocale(type: string | undefined): 'id' | 'en' {
  if (type === 'en') return 'en';
  return 'id';
}
