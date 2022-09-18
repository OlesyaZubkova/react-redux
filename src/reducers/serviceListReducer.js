import { nanoid } from "nanoid";

const initialState = [
  { id: nanoid(), name: "Замена стекла", price: 21000 },
  { id: nanoid(), name: "Замена дисплея", price: 25000 },
  { id: nanoid(), name: "Замена аккумулятора", price: 4000 },
  { id: nanoid(), name: "Замена микрофона", price: 2500 },
];

function serviceListReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case "ADD_SERVICE":
      const newState = [...state];
      const existServiceId = newState.findIndex(
        (service) => service.id === payload.id
      );
      existServiceId !== -1
        ? (newState[existServiceId] = payload)
        : newState.push({ ...payload, id: nanoid() });
      return newState;
    case "REMOVE_SERVICE":
      return state.filter((service) => service.id !== payload);
    default:
      return state;
  }
}

export default serviceListReducer;
