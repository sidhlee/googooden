import React from 'react';
import styled from 'styled-components';

import Button from './Button';

const StyledNavbar = styled.nav`
  z-index: 100;
  background: rgba(255, 255, 255, 0.95);
  align-self: center;
  width: 90%;
  max-width: 1400px;
  margin: 2em auto var(--y-spacer);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ul {
    min-width: 60%;
    display: block;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    flex: 1 1 auto;
    gap: 1rem;
    li {
      flex: 1;
      padding: 0.5em 0;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      font-size: 1.5rem;
      font-weight: 700;
      button {
        font: inherit;
        border: none;
        background: transparent;
        opacity: 0.6;
        transition: all 200ms ease-in-out;
        /* accessible focus styling for nav-link button */
        &:focus {
          outline: none;
          border-bottom: 1px solid rgba(0, 0, 0, 0.3);
        }
      }
      &.active {
        button {
          color: var(--cl-primary);
          font-weight: 900;
          opacity: 1;
          font-size: 2rem;
          /* remove focus style since selected link already has a visual cue */
          border-bottom: none;
          &:not(:focus) {
            opacity: 0.8;
          }
        }
      }
    }
  }
  .nav-buttons {
    display: flex;
    justify-content: center;
    margin: 2rem 1rem 0;
  }
`;

type Props = {
  stage: number;
  handleStageClick: (stage: number) => void;
  handleScrambleClick: () => void;
  handleResetOrderClick: () => void;
};

function Navbar(props: Props) {
  return (
    <StyledNavbar>
      <ul>
        {[2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 13, 14, 15, 16, 17, 18, 19].map(
          (v, i) => (
            <li
              key={v}
              className={`${v === props.stage ? 'active' : null}`}
              onClick={() => props.handleStageClick(v)}
            >
              <button>{v}</button>
            </li>
          )
        )}
      </ul>
      <div className="nav-buttons">
        <Button handleClick={props.handleScrambleClick}>Shuffle!</Button>
        <Button outline={true} handleClick={props.handleResetOrderClick}>
          Reset
        </Button>
      </div>
    </StyledNavbar>
  );
}

export default Navbar;
