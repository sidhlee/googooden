import React, { useState } from 'react';
import styled from 'styled-components';

const StyledTimesItem = styled.li<{ $isDragging: boolean }>`
  font-size: 2.5rem;

  text-align: right;
  display: flex;
  align-items: center;
  .question {
    display: inline-block;
    width: 10.5rem;
    text-align: left;
  }
  /* TODO - improve button design? (fix default background?) */
  .answer {
    cursor: pointer;
    border: none;
    background: var(--cl-light);
    --size: 5rem;
    font: inherit;
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--size);
    height: var(--size);
    position: relative;
    text-align: center;
    .cover {
      transition: none;
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      background: var(--cl-primary);
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      color: white;
      opacity: ${(props) => (props.$isDragging ? 0.01 : 1)};
    }
  }
`;

type Props = {
  stage: number;
  factor: number;
};

function TimesItem(props: Props) {
  const [isDragging, setIsDragging] = useState(false);

  const handleDragStart = (event: React.DragEvent<HTMLSpanElement>) => {
    setIsDragging(true);

    // var img = new Image();
    // img.src =
    //   'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';
    // event.dataTransfer.setDragImage(img, 0, 0);
  };

  const handleDragEnd = (event: React.DragEvent<HTMLSpanElement>) => {
    event.preventDefault(); // prevent the browser's default drag end behavior
    setIsDragging(false);
  };

  return (
    <StyledTimesItem $isDragging={isDragging}>
      <div className="question">
        {props.stage} <span className="times">X</span> {props.factor} ={' '}
      </div>
      <div className="answer">
        <span className="answer">{props.stage * props.factor}</span>
        <span
          className="cover"
          draggable
          onDragStart={handleDragStart}
          onDragEnd={handleDragEnd}
        >
          ?
        </span>
      </div>
    </StyledTimesItem>
  );
}

export default TimesItem;
