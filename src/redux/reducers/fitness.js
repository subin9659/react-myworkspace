const initialState = [];

const fitness = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_FITNESS_SUCCEEDED":
      return [{ ...action.payload }, ...state];
    case "REMOVE_FITNESS_SUCCEEDED":
      return state.filter((fitness) => fitness.id !== action.payload);
    case "MODIFY_FITNESS_SUCCEEDED":
      return state.map((fitness) =>
        fitness.id === action.payload.id ? { ...action.payload } : fitness
      );
    case "FETCH_FITNESSLIST_SUCCEEDED":
      // 서버에서 받아온 데이터로 state를 변경
      return [...action.payload];
    default:
      return state;
  }
};

export default fitness;
