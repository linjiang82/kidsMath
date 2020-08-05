const reducer = (state, actions) => {
  switch (actions.type) {
    case "ChangeOnes":
      return {
        ...state,
        ones: actions.value,
      };
    case "ChangeTens":
      return {
        ...state,
        tens: actions.value,
      };
    default:
      return state;
  }
};
export default reducer;
