import { useState } from 'react';
import { produce } from 'immer';

export function useImmer(initialState: any) {
  const [state, setState] = useState(initialState);
  const updateState = (draftUpdater: Function) => {
    const updatedState = produce(state, draftUpdater);
    setState(updatedState);
  };
  return [state, updateState];
}
