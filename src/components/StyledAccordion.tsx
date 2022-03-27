/* eslint-disable */
import Accordion from '@mui/material/Accordion';
import { FC } from 'react';
import React from 'react';
import { createStyles, makeStyles } from '@mui/styles';
import { StyleRules } from '@mui/styles/withStyles';

const useStyles = makeStyles((): StyleRules => createStyles({
  root: {
    boxShadow: 'none !important',
    padding: 0,
    MuiAccordionDetails: {
      padding: 0,
    },
  },
}));

const StyledAccordion: FC = ({ children }): JSX.Element => {
  const classes = useStyles();
  return (
    <Accordion classes={classes}>
      {children as NonNullable<React.ReactNode>}
    </Accordion>
  );
};

export default StyledAccordion;
