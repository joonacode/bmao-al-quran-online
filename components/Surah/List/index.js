import { SurahItem } from '@/components';
import { Grid } from '@chakra-ui/layout';

const ListSurah = ({ data }) => {
  return (
    <Grid
      templateColumns={{
        base: 'repeat(1, 1fr)',
        sm: 'repeat(2, 1fr)',
        md: 'repeat(3, 1fr)',
      }}
      gap={5}
    >
      {data.map((surat, i) => (
        <SurahItem key={i} data={surat} />
      ))}
    </Grid>
  );
};

export default ListSurah;
