const initialState = {
  theme: "dark",
  language: "tr",
};

const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "TEMA_DEGİS":
      return state;
    case "DİL_DEGİS":
      return state;
    default:
      return state;
  }
};

export default themeReducer;
