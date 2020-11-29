import React, { createContext, useReducer, Dispatch } from 'react';
import MainReducer from '../reducers/coffeeReducer';

type InitialStateType = {
  isConnectedToServer: boolean,
};

const initialState = {
  isConnectedToServer: false,
};

const CoffeeContext = createContext<{
  state: InitialStateType,
  dispatch: Dispatch<any>,
}>({
  state: initialState,
  dispatch: () => null,
});

const CoffeeProvider: React.FC = (props: any) => {
  const [state, dispatch] = useReducer(MainReducer, initialState);

  return (
    <CoffeeContext.Provider value={{ state, dispatch }}>
      {props.children}
    </CoffeeContext.Provider>
  );
};

export { CoffeeProvider, CoffeeContext };
