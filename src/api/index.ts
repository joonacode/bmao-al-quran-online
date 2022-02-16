import axios from 'axios';

const Api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_URL_API,
});
const ApiTR = axios.create({
  baseURL: process.env.NEXT_PUBLIC_URL_API_TR,
});

const listEndpoint = {
  getListSurat: () => Api.get('surah'),
  getDetailSurat: (id: string) => Api.get(`surah/${id}`),
  getTranslateSuratID: (id: string) => ApiTR.get(`surat/${id}`),
};

export default listEndpoint;
