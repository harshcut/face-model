export const login = (data: object) => {
  return { type: "SET_USER", payload: data };
};

export const logout = () => {
  return { type: "CLEAR_USER" };
};
