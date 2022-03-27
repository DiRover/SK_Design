/* eslint-disable */
import { FC, memo } from 'react';
import { FieldRenderProps } from 'react-final-form';
import { FormControl } from '@mui/material';

type props = Pick<FieldRenderProps<unknown, HTMLInputElement>, 'meta'>;

const FormControlWrapper: FC<props> = memo(({ meta, children }): JSX.Element => {
  const { touched, error } = meta;

  const hasError = !!(touched && error);

  return (
    <FormControl fullWidth error={hasError}>
      {children}
    </FormControl>
  );
});

export default FormControlWrapper;
