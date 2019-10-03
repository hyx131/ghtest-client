export const initialState = {
  show: false
};

export const showReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CLICK":
      return {
        ...state,
        show: true
      };
    case "UNCLICK":
      return {
        ...state,
        show: false
      };
    default:
      return state;
  }
};
