type Action = { type: 'SET_COFFEE_PAID', status: boolean };

type State = { isPaid: boolean };

const headerReducer = (state: State, action: Action): any => {
  switch (action.type) {
    case 'SET_COFFEE_PAID': {
      return { ...state, isPaid: action.status };
    }

    default:
      return state;
  }
};

export default headerReducer;
