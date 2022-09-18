const initialState = {
  id: "",
  name: "",
  price: "",
};

function serviceFormReducer(state = initialState, action) {
  const { type, payload } = action;
  let newState;

  switch (type) {
    case "SET_FORM":
      newState = payload;
      return newState;
    case "RESET_FORM":
      newState = { id: "", name: "", price: "" };
      return newState;
    default:
      return state;
  }
}

export default serviceFormReducer;
