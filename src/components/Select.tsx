/* eslint-disable */
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import { FormHelperText, Select as BasicSelect } from '@mui/material';
import { FC } from 'react';
import styled from '@emotion/styled';
import { makeStyles } from '@mui/styles';

import { FieldMetaState, FieldInputProps } from 'react-final-form';

type cityType = {
  id: string;
  name: string;
};

export interface SelectProps {
  options: Array<string | cityType>;
  meta: FieldMetaState<string>;
  input: FieldInputProps<string, HTMLElement>;
  label: string;
}

const StyledMenuItem = styled(MenuItem)({
  borderBottom: 'var(--border-weight) solid var(--color-secondary)',
  color: 'var(--color-item) !important',
});

const StyledFormHelper = styled(FormHelperText)({
  position: 'absolute',
  top: '90%',
});

const StyledInputLabel = styled(InputLabel)({
  color: 'var(--color-item) !important',
});

const useStyles = (error: boolean) => makeStyles({
  customOutline: {
    '& .MuiOutlinedInput-notchedOutline': {
      border: `var(--border-weight) solid ${error ? 'var(--color-error) !important' : 'var(--color-secondary)'}`,
      height: '50px',
      borderRadius: 'var(--radius) !important',
    },
    '&:hover .MuiOutlinedInput-notchedOutline': {
      borderColor: 'var(--color-secondary) !important',
    },
  },
  menu: {
    borderRadius: 'var(--radius)',
  },
});

const Select: FC<SelectProps> = (props): JSX.Element => {
  const {
    options, meta, label, input,
  } = props;

  const error = !!(meta.touched && meta.error);

  const classes = useStyles(error)();

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth error={error} classes={{ root: classes.customOutline }}>
        <StyledInputLabel id="demo-simple-select-label">{label}</StyledInputLabel>
        <BasicSelect
          {...input}
          label={label}
          MenuProps={{
            MenuListProps: {
              disablePadding: true,
              className: classes.menu,
            },
          }}
        >
          {options?.map((item) => (
            <StyledMenuItem
              key={typeof item === 'string' ? item : item.id}
              value={typeof item === 'string' ? item : item.id}
            >
              {typeof item === 'string' ? item : item.name}
            </StyledMenuItem>
          ))}
        </BasicSelect>
        {error && <StyledFormHelper>Обязательное поле</StyledFormHelper>}
      </FormControl>
    </Box>
  );
};

export default Select;
