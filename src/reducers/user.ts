export const userReducer = (
  state = {
    data: null,
    auth: false,
  },
  action: { type: "SET_USER" | "CLEAR_USER" | string; payload: object | null }
) => {
  switch (action.type) {
    case "SET_USER":
      return {
        data: action.payload,
        auth: true,
      };
    case "CLEAR_USER":
      return {
        data: null,
        auth: false,
      };
    default:
      return state;
  }
};
