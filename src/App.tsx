import React, { useState, useEffect } from 'react';
import shuffle from 'lodash.shuffle';
import TimesTable from './TimesTable';
import Navbar from './Navbar';

// import { initialTimesItems } from './models/TimesItem';
// import { TimesItem, initialTimesItems } from './models/TimesItem';
// import { useImmer } from './hooks/useImmer';

const initialFactors = [
  2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
];

function App() {
  // TODO - connect to firebase
  // const [timesItems, setTimesItems] = useImmer(initialTimesItems);

  const [factors, setFactors] = useState(initialFactors);
  const [stage, setStage] = useState(2);

  const selectStage = (stage: number) => {
    setStage(stage);
  };

  const scramble = () => {
    setFactors((prev) => shuffle(prev));
  };

  const resetOrder = () => {
    setFactors(initialFactors);
  };

  useEffect(() => {});

  return (
    <div className="App">
      <Navbar
        stage={stage}
        handleScrambleClick={scramble}
        handleStageClick={selectStage}
        handleResetOrderClick={resetOrder}
      />
      <header className="header">
        <h1>
          <span role="img" aria-label="rainbow">
            🌈
          </span>
          구구든
          <span role="img" aria-label="star">
            ⭐️
          </span>
        </h1>
      </header>
      <TimesTable factors={factors} stage={stage} />
    </div>
  );
}

export default App;
