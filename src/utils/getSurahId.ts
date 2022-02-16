export default function getSurahId(param: any): number {
  if (param?.length === 0) return 404;
  if (isNaN(Number(param[0]))) return 404;
  if (typeof Number(param[0]) === 'number') return Number(param[0]);
  return 404;
}
