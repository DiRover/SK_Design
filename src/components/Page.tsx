/* eslint-disable */
import { FC } from 'react';
import { isMobile } from 'react-device-detect';
import Grid from '@mui/material/Grid';
import styled from '@emotion/styled';
import Text from './Text';
import Form from './Form';

const Container = styled(Grid)({
  margin: `${isMobile ? '20px' : '175px'} auto`,
  maxWidth: '1440px',
  padding: '0 0.5rem',
});

const Page: FC = (): JSX.Element => (
  <Container
    container
    direction={isMobile ? 'column' : 'row'}
    wrap="nowrap"
    justifyContent="space-between"
  >
    <Grid item>
      <Text />
    </Grid>

    <Grid item>
      <Form />
    </Grid>
  </Container>
);

export default Page;
