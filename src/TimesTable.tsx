import React from 'react';
import styled from 'styled-components';

import TimesItem from './TimesItem';

const StyledTimesTable = styled.div`
  width: 90%;
  max-width: 1500px;
  height: 100%;
  min-height: 600px;
  margin: 5vh auto;

  .quiz {
    display: grid;
    gap: 2.25rem;
    justify-content: center;
    align-items: start;
    justify-items: center;
    grid-template-columns: repeat(auto-fit, minmax(8em, 25em));
    grid-auto-rows: 9vmax;
  }
`;

type Props = {
  stage: number;
  factors: number[];
};

function TimesTable(props: Props) {
  const items = Array.from({ length: 18 }, (_, i) => i).map((i) => (
    <TimesItem
      key={props.factors[i]}
      stage={props.stage}
      factor={props.factors[i]}
    />
  ));

  return (
    <StyledTimesTable className="main">
      <ul className="quiz">{items}</ul>
    </StyledTimesTable>
  );
}

export default TimesTable;
