/* eslint-disable */
import TextField, { TextFieldProps } from '@mui/material/TextField';
import { FC } from 'react';
import { FieldRenderProps } from 'react-final-form';
import { InputProps } from '@mui/material';
import { createStyles, makeStyles, withStyles } from '@mui/styles';
import FormControlWrapper from './FormControlWrapper';

interface Props
  extends Pick<TextFieldProps, 'label' | 'variant'>,
    FieldRenderProps<string> {
  inputProps?: Partial<InputProps>;
  visibilityToggle?: boolean;
}

const useStyles = (error: boolean) => makeStyles(() => createStyles({
  root: {
    '& fieldset': {
      border: `var(--border-weight) solid ${
        error ? 'var(--color-error) !important' : 'var(--color-secondary)'
      }`,
      borderRadius: 'var(--radius)',
      height: '50px',
    },
    '&:hover fieldset': {
      borderColor: `${error ? 'inherent' : 'var(--color-active)'} !important`,
    },

    '& label': {
      marginTop: '0.25rem',
      fontSize: '0.75rem !important',
      color: 'var(--color-main)',
    },
    '& .MuiOutlinedInput-root': {
      fontSize: '0.75rem !important',
      color: 'var(--color-main) !important',
      '&:focused fieldset': {
        borderColor: 'var(--color-active)  !important',
        color: 'var(--color-active)  !important',
      },
    },
  },
}));

const useHelperTextStyles = makeStyles(() => ({
  root: {
    position: 'absolute',
    top: '90%',
    fontSize: '0.75rem !important',
  },
}));

const FieldText: FC<Props> = ({
  input, placeholder, meta, label,
}) => {
  const error = meta.touched && meta.error;

  const classes = useStyles(error)();

  const helperTextStyles = useHelperTextStyles();

  return (
    <FormControlWrapper meta={meta}>
      <TextField
        label={label}
        InputLabelProps={{ shrink: true }}
        className={classes.root}
        error={!!(meta.touched && meta.error)}
        {...input}
        helperText={error ? 'Обязательное поле' : null}
        placeholder={placeholder}
        FormHelperTextProps={{
          classes: {
            root: helperTextStyles.root,
          },
        }}
      />
    </FormControlWrapper>
  );
};

export default FieldText;
