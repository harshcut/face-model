const BASE_URL: string = "https://face-model-api.herokuapp.com";

export const addToRegistry = async (data: object) => {
  const response = await fetch(`${BASE_URL}/register`, {
    method: "POST",
    credentials: "include",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return {
    response: await response.json(),
    status: response.status,
  };
};

export const checkInRegistry = async (data: object) => {
  const response = await fetch(`${BASE_URL}/signin`, {
    method: "POST",
    credentials: "include",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return {
    response: await response.json(),
    status: response.status,
  };
};

export const verifyLocalStorage = async () => {
  const { user } = JSON.parse(localStorage.getItem("state") as string);
  const response = await fetch(`${BASE_URL}/authenticate`, {
    method: "POST",
    credentials: "include",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user.data),
  });
  return {
    response: await response.json(),
    status: response.status,
  };
};

export const getImageDetection = async (image: string) => {
  const { user } = JSON.parse(localStorage.getItem("state") as string);
  const response = await fetch(`${BASE_URL}/detect`, {
    method: "PUT",
    credentials: "include",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      id: user.data.id,
      email: user.data.email,
      image,
    }),
  });
  return {
    response: await response.json(),
    status: response.status,
  };
};
