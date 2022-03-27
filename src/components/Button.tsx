/* eslint-disable */
import { FC } from 'react';
import styled from '@emotion/styled';

interface Props {
  type: 'submit';
  disabled: boolean;
}

const StyledButton = styled.button`
  width: 100%;
  height: 50px;
  border: none;
  border-radius: var(--radius);
  font-size: 0.875rem;
  padding: 0;
  background-color: ${({ disabled }) => (disabled ? 'var(--color-secondary)' : '#0086A8')};
  color: ${({ disabled }) => (disabled ? '#828282' : '#FFFFFF')};
  &:not(:disabled):hover {
    background-color: #007693;
    color: var(--color-primary);
  }
  &:not(:disabled):active {
    background-color: #00657E;
    color: var(--color-primary);
  }
`;

const Button: FC<Props> = ({ children, type, disabled }): JSX.Element => <StyledButton type={type} disabled={disabled}>{children}</StyledButton>;

export default Button;
