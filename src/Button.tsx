import React from 'react';
import styled, { css } from 'styled-components';

const outlineCss = css`
  background: transparent;
  color: var(--cl-primary);
  border: 3px solid var(--cl-primary);
  &:hover {
    color: var(--cl-light);
    background: var(--cl-primary);
  }
`;

const StyledButton = styled.button<{ $outline: boolean | undefined }>`
  flex-basis: auto;
  margin-left: 0.75em;
  display: block;
  font: inherit;
  font-size: 1.4rem;
  font-weight: 700;
  background: var(--cl-primary);
  color: white;
  padding: 0.5em 1.2em;
  border: 3px solid var(--cl-primary);

  &:hover {
    background-color: var(--cl-primary-light);
  }
  &:active {
    position: relative;
    top: 1px;
    left: 1px;
  }
  ${(props) => (props.$outline ? outlineCss : null)}
`;

type ButtonProps = {
  outline?: boolean;
  children: string;
  handleClick: () => void;
};
function Button(props: ButtonProps) {
  return (
    <StyledButton $outline={props.outline} onClick={props.handleClick}>
      {props.children}
    </StyledButton>
  );
}

export default Button;
