/* eslint-disable */
import { useDispatch } from 'react-redux';
import { Field, Form as FinalForm } from 'react-final-form';
import { FormApi } from 'final-form';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import { styled as styledComponent } from '@mui/material/styles';
import styled from '@emotion/styled';
import { isMobile } from 'react-device-detect';
import StyledAccordion from './StyledAccordion';
import sources from '../services/sources.json';
import cities from '../services/cities.json';
import { addRequest } from '../actions/actionCreators';
import Select, { SelectProps } from './Select';
import Button from './Button';
import FieldText from './FieldText';
import Validators from './validators';
import CircularProgress from '@mui/material/CircularProgress';
import { useState } from 'react';

export interface subscriptionType {
  [key: string]: string;
}

const AccordionDetails = styledComponent(MuiAccordionDetails)(() => ({
  padding: 0,
}));

const Container = styled.div`
  box-sizing: border-box;
  max-width: 440px;
  max-height: 611px;
  padding: 2.5rem 1.875rem;
  border-radius: var(--radius);
  box-shadow: 0px 5px 20px 0px rgba(53, 50, 56, 0.14);
`;

const Spinner= styled(CircularProgress)({
  color: 'white !important',
});

function Form(): JSX.Element {

  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  const onSubmit = (val: subscriptionType, form: FormApi) => {
    setLoading(true);
    setTimeout(() => {
      dispatch(addRequest(val));

      form.restart();
      console.log(JSON.stringify(val));
      setLoading(false);
    }, 2000);
  };

  function ReactSelectAdapter(props: SelectProps) {
    return <Select {...props} />;
  }

  return (
    <Container>
      <FinalForm
        subscription={{ dirty: true }}
        onSubmit={onSubmit}
        render={({ handleSubmit, dirty }) => (
          <form onSubmit={handleSubmit}>
            <Box>
              <Grid container direction='column' spacing={2.5}>
                <Grid item>
                  <Grid
                    container
                    spacing={2.5}
                    direction={isMobile ? 'column' : 'row'}
                    wrap='nowrap'
                  >
                    <Grid item>
                      <Field
                        name='firstName'
                        validate={Validators.requiredName}
                        render={({ input, meta }) => (
                          <FieldText
                            input={input}
                            meta={meta}
                            placeholder='Иван'
                            label='Ваше имя *'
                          />
                        )}
                      />
                    </Grid>
                    <Grid item>
                      <Field
                        name='phoneNumber'
                        validate={Validators.requiredPhone}
                        render={({ input, meta }) => (
                          <FieldText
                            input={input}
                            meta={meta}
                            placeholder='+7 (000)000-00-00'
                            label='Номер телефона *'
                          />
                        )}
                      />
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item>
                  <Grid
                    container
                    spacing={2.5}
                    direction={isMobile ? 'column' : 'row'}
                    wrap='nowrap'
                  >
                    <Grid item>
                      <Field
                        name='email'
                        validate={Validators.requiredEmail}
                        render={({ input, meta }) => (
                          <FieldText
                            input={input}
                            meta={meta}
                            placeholder='example@skdesign.ru'
                            label='E-mail *'
                          />
                        )}
                      />
                    </Grid>
                    <Grid item>
                      <Field
                        name='link'
                        validate={Validators.requiredProfileLink}
                        render={({ input, meta }) => (
                          <FieldText
                            input={input}
                            meta={meta}
                            placeholder='Ссылка на профильinstagram.com/skde…'
                            label='Ссылка на профиль *'
                          />
                        )}
                      />
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item>
                  <Field
                    name='city'
                    component={ReactSelectAdapter}
                    options={cities}
                    validate={Validators.required}
                    label='Выберите город *'
                  />
                </Grid>
                <Grid item>
                  <Field
                    name='organisation'
                    render={({ input, meta }) => (
                      <FieldText
                        input={input}
                        meta={meta}
                        placeholder='SK Design'
                        label='Название организации/студии'
                      />
                    )}
                  />
                </Grid>
                <Grid item>
                  <StyledAccordion>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls='panel1a-content'
                      id='panel1a-header'
                    >
                      <Typography>Скрыть дополнительные поля</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Grid container spacing={2.5} direction='column'>
                        <Grid item>
                          <Field
                            name='recipient'
                            render={({ input, meta }) => (
                              <FieldText
                                input={input}
                                meta={meta}
                                label='Получатель'
                                placeholder='ФИО'
                              />
                            )}
                          />
                        </Grid>
                        <Grid item>
                          <Field
                            name='info'
                            component={ReactSelectAdapter}
                            options={sources}
                            label='От куда узнали про нас?'
                          />
                        </Grid>
                      </Grid>
                    </AccordionDetails>
                  </StyledAccordion>
                </Grid>
                <Grid item>
                  <Button type='submit' disabled={!dirty}>
                    {loading ? <Spinner size={30} /> : 'Отправить заявку'}
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </form>
        )}
      />
    </Container>
  );
}

export default Form;

// const fields = Object.entries(val).map(([key]) => {
//   return key;
// });
