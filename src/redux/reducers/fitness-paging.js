const initialState = {
  content: [],
  page: 0,
  size: 10,
  totalElements: 0,
};

const fitness = (state = initialState, action) => {
  switch (action.type) {
    case "MODIFY_FITNESS_SUCCEEDED": {
      // 기존 상태를 카피함. (속성목록과 속성값은 같지만, 서로 다른참조인 상태 -> 새로운 객체)
      const newState = { ...state }; // 기존 state copy
      // 변동된 부분만 변경
      newState.content = state.content.map((fitness) =>
        fitness.id === action.payload.id ? { ...action.payload } : fitness
      );
      // 새로운 상태로 리턴
      return newState;
    }

    case "FETCH_FITNESSLIST_PAGING_SUCCEEDED":
      return {
        content: action.payload.content, // 실제 데이터 목록
        page: action.payload.number, // 현재 페이지 번호
        size: action.payload.size, // 페이지 크기
        totalElements: action.payload.totalElements, // 전체 데이터 개수
      };
    // default 케이스는 기존 상태를 반환

    default:
      return state;
  }
};

export default fitness;
