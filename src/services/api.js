const BASE_URL = "https://t4e-testserver.onrender.com/api";

export const getToken = async () => {
  const res = await fetch(`${BASE_URL}/public/token`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      studentId: "e0123023",  // ⚠️ CHANGE THIS
      password: "950167"
    })
  });

  return res.json();
};

export const getData = async (token) => {
  const res = await fetch(`${BASE_URL}/private/data`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });

  return res.json();
};